type CategoryConfigType = {
  [key: string]: {
    // Allows dynamic keys as strings
    name: string;
    steps: string[];
  };
};

const categoryConfig: CategoryConfigType = {
  parketRenovatie: {
    name: 'Parket Renovatie',
    steps: [
      'StepOne',
      'parketRenovatieStepTwo',
      'parketRenovatieStepThreePart1',
      'parketRenovatieStepThreePart2',
      'parketRenovatieStepFour',
      'StepFive', // StepFive comes before optional steps
      'ContactInfoStep',
      'FinalStep',
    ],
  },
  vloerenLeggen: {
    name: 'Vloeren Leggen',
    steps: [
      'StepOne',
      'vloerenLeggenStepTwo',
      'vloerenLeggenStepThree',
      'vloerenLeggenStepFour',
      'StepFive',
      'ContactInfoStep',
      'FinalStep',
    ],
  },
  Overig: {
    name: 'Overig',
    steps: ['StepOne', 'overigStepTwo', 'overigStepThree', 'StepFive', 'ContactInfoStep', 'FinalStep'],
  },
  Stofferen: {
    name: 'Stofferen',
    steps: [
      'StepOne',
      'stofferenStepTwo',
      'stofferenStepThree',
      'stofferenStepFour',
      'StepFive',
      'ContactInfoStep',
      'FinalStep',
    ],
  },
};

export default categoryConfig;
