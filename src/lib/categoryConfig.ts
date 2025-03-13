type CategoryConfigType = {
  [key: string]: {
    // Allows dynamic keys as strings
    name: string;
    steps: string[];
  };
};

const categoryConfig: CategoryConfigType = {
  Parketrenovatie: {
    name: 'Parketrenovatie',
    steps: [
      'StepOne',
      'parketRenovatieStepTwo',
      'parketRenovatieStepThreePart1',
      'parketRenovatieStepThreePart2',
      'parketRenovatieStepThreePart3',
      'parketRenovatieStepFour',
      'StepFive',
      'ContactInfoStep',
      'FinalStep',
    ],
  },
  Traprenovatie: {
    name: 'Traprenovatie',
    steps: [
      'StepOne',
      'trapRenovatieStepTwo',
      'trapRenovatieStepThree',
      'trapRenovatieStepFour',
      'StepFive',
      'ContactInfoStep',
      'FinalStep',
    ],
  },
  'Vloeren leggen': {
    name: 'Vloeren leggen',
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
  Stofferen: {
    name: 'Stofferen',
    steps: [
      'StepOne',
      'stofferenStepTwo',
      'stofferenStepThree',
      // 'stofferenStepFour',
      'StepFive',
      'ContactInfoStep',
      'FinalStep',
    ],
  },
  Overig: {
    name: 'Overig',
    steps: ['StepOne', 'overigStepTwo', 'overigStepThree', 'StepFive', 'ContactInfoStep', 'FinalStep'],
  },
};

export default categoryConfig;
