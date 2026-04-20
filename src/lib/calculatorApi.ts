// API client for fetching calculator configurations from the dashboard

const DASHBOARD_API_URL = process.env.NEXT_PUBLIC_DASHBOARD_API_URL || 'http://localhost:3001';

// Conditional logic types
export interface ConditionalRule {
  questionId: string;
  value: string;
  values?: string[]; // For matching any of multiple values
}

export interface ConditionalLogic {
  operator: 'AND' | 'OR';
  conditions: ConditionalRule[];
}

export type ConditionalOn = ConditionalRule | ConditionalLogic | null;

// Price variants type - maps service/variant name to price
export type PriceVariants = Record<string, number>;

export interface StepOption {
  id: string;
  label: string;
  value: string;
  price: number | null;
  imageUrl: string | null;
  order: number;
  isExclusive?: boolean; // When selected, clears other selections
  priceVariants?: PriceVariants | null; // Different prices per service type
}

export interface Question {
  id: string;
  order: number;
  type: 'SELECT' | 'NUMBER' | 'TEXT' | 'TEXT_ONLY' | 'CHECKBOX' | 'FILE_UPLOAD';
  question: string;
  required: boolean;
  pricingImpact: 'BASE' | 'MULTIPLIER' | 'ADDITIVE' | 'COUNT_SELECTED' | 'NONE';
  pricePerUnit: number | null;
  unit: string | null;
  minValue: number | null;
  maxValue: number | null;
  defaultValue: number | null;
  placeholder: string | null;
  countThreshold?: number | null; // For COUNT_SELECTED: only count items > this value
  multiplyByQuestionId?: string | null; // Multiply option price by value from another question
  variantSourceQuestionId?: string | null; // Which question determines the price variant
  multipliesPriceOfQuestionId?: string | null; // This question's value multiplies the price from referenced question
  conditionalOn: ConditionalOn;
  options: StepOption[];
}

export interface FormStep {
  id: string;
  order: number;
  description: string | null;
  questions: Question[];
}

export interface Calculator {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  baseImage: string | null;
  status: string;
  steps: FormStep[];
}

export interface PriceBreakdown {
  basePrice: number;
  multipliers: Array<{ label: string; factor: number }>;
  additions: Array<{ label: string; amount: number }>;
  total: number;
}

// Type guards for conditional logic
function isConditionalLogic(conditionalOn: ConditionalOn): conditionalOn is ConditionalLogic {
  return conditionalOn !== null && 'operator' in conditionalOn && 'conditions' in conditionalOn;
}

function isConditionalRule(conditionalOn: ConditionalOn): conditionalOn is ConditionalRule {
  return conditionalOn !== null && 'questionId' in conditionalOn && !('operator' in conditionalOn);
}

/**
 * Fetch all published calculators from the dashboard API
 */
export async function getAllCalculators(): Promise<Calculator[]> {
  try {
    const response = await fetch(`${DASHBOARD_API_URL}/api/calculators`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch calculators');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching calculators:', error);
    return [];
  }
}

/**
 * Fetch a single calculator by slug from the dashboard API
 */
export async function getCalculatorBySlug(slug: string): Promise<Calculator | null> {
  try {
    const response = await fetch(`${DASHBOARD_API_URL}/api/calculators/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch calculator');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching calculator:', error);
    return null;
  }
}

/**
 * Check if a single condition is met
 */
function checkSingleCondition(
  condition: ConditionalRule,
  answers: Record<string, string | number | string[]>
): boolean {
  const { questionId, value, values } = condition;
  const answer = answers[questionId];

  if (answer === undefined) {
    return false;
  }

  // Get list of values to check against
  const valuesToCheck = values ? values : [value];

  // Handle array answers (CHECKBOX)
  if (Array.isArray(answer)) {
    return valuesToCheck.some((v) => answer.includes(v));
  }

  // Handle JSON string arrays (legacy format)
  if (typeof answer === 'string' && answer.startsWith('[')) {
    try {
      const selectedValues = JSON.parse(answer);
      return valuesToCheck.some((v) => selectedValues.includes(v));
    } catch {
      return valuesToCheck.includes(answer);
    }
  }

  // Handle simple values
  return valuesToCheck.includes(String(answer));
}

/**
 * Check if a question should be visible based on conditional logic
 * Supports both legacy single condition and new multiple conditions with AND/OR
 */
export function isQuestionVisible(question: Question, answers: Record<string, string | number | string[]>): boolean {
  if (!question.conditionalOn) {
    return true;
  }

  // Handle multiple conditions with operator
  if (isConditionalLogic(question.conditionalOn)) {
    const { operator, conditions } = question.conditionalOn;

    if (conditions.length === 0) {
      return true;
    }

    if (operator === 'AND') {
      return conditions.every((condition) => checkSingleCondition(condition, answers));
    } else {
      // OR
      return conditions.some((condition) => checkSingleCondition(condition, answers));
    }
  }

  // Handle legacy single condition
  if (isConditionalRule(question.conditionalOn)) {
    return checkSingleCondition(question.conditionalOn, answers);
  }

  return true;
}

/**
 * Get visible questions for a step based on current answers
 */
export function getVisibleQuestions(step: FormStep, answers: Record<string, string | number | string[]>): Question[] {
  return step.questions.filter((q) => isQuestionVisible(q, answers));
}

/**
 * Get visible steps (steps that have at least one visible question)
 */
export function getVisibleSteps(
  calculator: Calculator,
  answers: Record<string, string | number | string[]>
): FormStep[] {
  return calculator.steps.filter((step) => {
    const visibleQuestions = getVisibleQuestions(step, answers);
    return visibleQuestions.length > 0;
  });
}

/**
 * Check if all required questions in a step are answered
 */
export function isStepComplete(step: FormStep, answers: Record<string, string | number | string[]>): boolean {
  const visibleQuestions = getVisibleQuestions(step, answers);

  return visibleQuestions.every((question) => {
    if (!question.required) return true;

    const answer = answers[question.id];
    if (answer === undefined || answer === null || answer === '') {
      return false;
    }

    // For arrays (CHECKBOX), check if at least one item is selected
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }

    return true;
  });
}

/**
 * Helper to get selected values as array from an answer
 */
function getSelectedValues(answer: string | number | string[] | undefined): string[] {
  if (answer === undefined || answer === null || answer === '') {
    return [];
  }

  if (Array.isArray(answer)) {
    return answer;
  }

  if (typeof answer === 'string' && answer.startsWith('[')) {
    try {
      return JSON.parse(answer);
    } catch {
      return [answer];
    }
  }

  return [String(answer)];
}

/**
 * Helper to get numeric value from an answer (for multiplication)
 * Parses SELECT values like "15" or "30+" to numbers
 */
/**
 * Whether an answer is a genuinely numeric value (as opposed to an arbitrary string
 * whose stripped form happens to parse as a number, or a missing value).
 * Used to decide whether a `multipliesPriceOfQuestionId` reference is semantically
 * a numeric factor, so misconfigured fields on non-numeric questions don't silently
 * zero out composed factors.
 */
function isNumericAnswer(answer: string | number | string[] | undefined): boolean {
  if (typeof answer === 'number') return !isNaN(answer);
  if (typeof answer === 'string') return /^-?\d+(\.\d+)?$/.test(answer.trim());
  return false;
}

function getNumericValue(answer: string | number | string[] | undefined): number {
  if (answer === undefined || answer === null || answer === '') {
    return 0;
  }

  // If it's already a number, return it
  if (typeof answer === 'number') {
    return answer;
  }

  // If it's a string, try to parse it
  if (typeof answer === 'string') {
    // Handle values like "15+", "30+" - strip non-numeric chars but keep decimal point
    const cleaned = answer.replace(/[^0-9.]/g, '');
    const numericPart = parseFloat(cleaned);
    return isNaN(numericPart) ? 0 : numericPart;
  }

  // If it's an array, return the length (count)
  if (Array.isArray(answer)) {
    return answer.length;
  }

  return 0;
}

/**
 * Helper to get option price considering variants
 * If variant source is set and user selected a variant, use variant price
 * Otherwise fall back to default price
 */
function getOptionPrice(
  option: StepOption,
  question: Question,
  answers: Record<string, string | number | string[]>,
  calculator: Calculator
): number {
  const defaultPrice = option.price ?? 0;

  // If no variant source is set, use default price
  if (!question.variantSourceQuestionId) {
    return defaultPrice;
  }

  // Get the variant source answer (e.g., "PVC" or "Hout")
  const variantAnswer = answers[question.variantSourceQuestionId];
  if (!variantAnswer || typeof variantAnswer !== 'string') {
    return defaultPrice;
  }

  // Find the variant source question to get the selected option's label
  let variantLabel = variantAnswer;
  for (const step of calculator.steps) {
    const sourceQuestion = step.questions.find((q) => q.id === question.variantSourceQuestionId);
    if (sourceQuestion) {
      const selectedOption = sourceQuestion.options.find((o) => o.value === variantAnswer);
      if (selectedOption) {
        variantLabel = selectedOption.label;
      }
      break;
    }
  }

  // Look up the variant price
  if (option.priceVariants && option.priceVariants[variantLabel] !== undefined) {
    return option.priceVariants[variantLabel];
  }

  // Fall back to default price
  return defaultPrice;
}

/**
 * Calculate price based on answers
 */
export function calculatePrice(
  calculator: Calculator,
  answers: Record<string, string | number | string[]>
): PriceBreakdown {
  let basePrice = 0;
  const multipliers: Array<{ label: string; factor: number }> = [];
  const additions: Array<{ label: string; amount: number }> = [];

  const visibleSteps = getVisibleSteps(calculator, answers);

  // Group scoped multipliers by target question ID.
  // Multiple MULTIPLIER questions can scope to the same target (e.g. "number of stairs" AND
  // "treads per stair" both multiplying "stair cladding price"). Their numeric answers must
  // compose multiplicatively: target_price × factor1 × factor2 × ... — not add.
  const scopedFactorsByTargetId = new Map<string, Array<{ question: Question; factor: number }>>();
  for (const step of visibleSteps) {
    const visibleQs = getVisibleQuestions(step, answers);
    for (const question of visibleQs) {
      if (!question.multipliesPriceOfQuestionId) continue;
      const answer = answers[question.id];
      // Only include if the answer is a genuinely numeric string/number.
      // Non-numeric answers (e.g. a BASE question with a string label whose `multipliesPriceOfQuestionId`
      // was set by mistake) would otherwise parse to factor=0 and silently zero the composed product.
      if (!isNumericAnswer(answer)) continue;
      const factor = getNumericValue(answer);
      const list = scopedFactorsByTargetId.get(question.multipliesPriceOfQuestionId) ?? [];
      list.push({ question, factor });
      scopedFactorsByTargetId.set(question.multipliesPriceOfQuestionId, list);
    }
  }

  // Targets whose BASE price is handled via scoped multipliers — skip their direct BASE contribution
  const questionsWithExternalMultiplier = new Set<string>(scopedFactorsByTargetId.keys());

  // Compute one composed addition per target question
  for (const [targetId, factors] of scopedFactorsByTargetId) {
    const target = calculator.steps.flatMap((s) => s.questions).find((q) => q.id === targetId);
    if (!target) continue;

    const targetAnswer = answers[target.id];
    if (targetAnswer === undefined || targetAnswer === null || targetAnswer === '') continue;

    let priceFromTarget = 0;
    if (target.type === 'SELECT') {
      const selectedOption = target.options.find((opt) => opt.value === targetAnswer);
      if (selectedOption) {
        priceFromTarget = getOptionPrice(selectedOption, target, answers, calculator);
      }
    } else if (target.type === 'CHECKBOX') {
      for (const val of getSelectedValues(targetAnswer)) {
        const option = target.options.find((opt) => opt.value === val);
        if (option) {
          priceFromTarget += getOptionPrice(option, target, answers, calculator);
        }
      }
    }

    if (priceFromTarget <= 0) continue;

    const composedFactor = factors.reduce((acc, f) => acc * f.factor, 1);
    if (composedFactor <= 0) continue;

    const factorsLabel = factors.map((f) => String(f.factor)).join(' × ');
    additions.push({
      label: `${target.question} (€${priceFromTarget} × ${factorsLabel})`,
      amount: priceFromTarget * composedFactor,
    });
  }

  for (const step of visibleSteps) {
    const visibleQuestions = getVisibleQuestions(step, answers);

    for (const question of visibleQuestions) {
      const answer = answers[question.id];

      // Scoped multipliers are already handled by the pre-pass above
      if (question.multipliesPriceOfQuestionId) {
        continue;
      }

      if (answer === undefined || answer === null || answer === '') {
        continue;
      }

      switch (question.pricingImpact) {
        case 'BASE': {
          // Skip if this question's price is being handled by another question via multipliesPriceOfQuestionId
          if (questionsWithExternalMultiplier.has(question.id)) {
            break;
          }
          // Get the multiplier value if multiplyByQuestionId is set
          let multiplierValue = 1;
          if (question.multiplyByQuestionId) {
            const multiplierAnswer = answers[question.multiplyByQuestionId];
            multiplierValue = getNumericValue(multiplierAnswer);
            // If multiplier is 0 or invalid, skip this price contribution
            if (multiplierValue <= 0) {
              multiplierValue = 0;
            }
          }

          if (question.type === 'SELECT') {
            const selectedOption = question.options.find((opt) => opt.value === answer);
            if (selectedOption) {
              // Use getOptionPrice to handle variant pricing
              const optionPrice = getOptionPrice(selectedOption, question, answers, calculator);
              if (optionPrice > 0) {
                const priceToAdd = optionPrice * multiplierValue;
                basePrice += priceToAdd;
              }
            }
          } else if (question.type === 'CHECKBOX') {
            // Handle checkbox multi-select
            const selectedValues = getSelectedValues(answer);
            for (const val of selectedValues) {
              const option = question.options.find((opt) => opt.value === val);
              if (option) {
                // Use getOptionPrice to handle variant pricing
                const optionPrice = getOptionPrice(option, question, answers, calculator);
                if (optionPrice > 0) {
                  const priceToAdd = optionPrice * multiplierValue;
                  basePrice += priceToAdd;
                }
              }
            }
          }
          break;
        }

        case 'MULTIPLIER': {
          const numValue = Number(answer);
          if (!isNaN(numValue) && numValue > 0) {
            multipliers.push({
              label: question.question,
              factor: numValue,
            });
          }
          break;
        }

        case 'ADDITIVE': {
          const quantity = Number(answer);
          const pricePerUnit = question.pricePerUnit || 0;
          if (!isNaN(quantity) && quantity > 0) {
            const amount = quantity * pricePerUnit;
            additions.push({
              label: question.question,
              amount,
            });
          }
          break;
        }

        case 'COUNT_SELECTED': {
          // Count selected items and multiply by pricePerUnit
          // Used for floor pricing: €25 per floor selected
          const selectedValues = getSelectedValues(answer);
          const pricePerItem = question.pricePerUnit || 0;

          // Filter by countThreshold if set (e.g., only count floors above ground level)
          let filteredValues = selectedValues;
          if (question.countThreshold !== undefined && question.countThreshold !== null) {
            filteredValues = selectedValues.filter((val) => {
              const numVal = parseFloat(val);
              return !isNaN(numVal) && numVal > question.countThreshold!;
            });
          }

          const count = filteredValues.length;

          if (count > 0) {
            const amount = count * pricePerItem;
            additions.push({
              label: question.question,
              amount,
            });
          }
          break;
        }

        case 'NONE':
        default:
          break;
      }
    }
  }

  // Calculate total
  let total = basePrice;

  // Apply multipliers
  for (const mult of multipliers) {
    total *= mult.factor;
  }

  // Add additions
  for (const add of additions) {
    total += add.amount;
  }

  return {
    basePrice,
    multipliers,
    additions,
    total,
  };
}

/**
 * Handle exclusive option selection for CHECKBOX questions
 * When an exclusive option is selected, it clears all other selections
 */
export function handleExclusiveSelection(
  currentSelection: string[],
  newValue: string,
  options: StepOption[]
): string[] {
  const clickedOption = options.find((opt) => opt.value === newValue);

  if (!clickedOption) {
    return currentSelection;
  }

  // If clicking an exclusive option, return only that option
  if (clickedOption.isExclusive) {
    return [newValue];
  }

  // If selecting a non-exclusive option, remove any exclusive options from selection
  const nonExclusiveSelection = currentSelection.filter((val) => {
    const opt = options.find((o) => o.value === val);
    return !opt?.isExclusive;
  });

  // Toggle the clicked option
  if (nonExclusiveSelection.includes(newValue)) {
    return nonExclusiveSelection.filter((v) => v !== newValue);
  } else {
    return [...nonExclusiveSelection, newValue];
  }
}
