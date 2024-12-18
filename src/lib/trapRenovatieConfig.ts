type TraprenovatieConfigType = {
  [key: string]: {
    pricing: {
      openStairs?: Record<string, number>;
      closedStairs?: Record<string, number>;
      additionalOptions?: Record<string, number>;
    };
    applicableSteps: string[];
  };
};

export const trapRenovatieConfig: TraprenovatieConfigType = {
  'Bekleden met PVC': {
    pricing: {
      openStairs: {
        'Alleen boven kant': 165.0,
        Rondom: 300.0,
      },
      closedStairs: {
        Overzettrede: 235.0,
        'Met profiel': 150.0,
      },
      additionalOptions: {
        stootborden: 25.0,
        verlichtingStatic: 350.0,
        verlichtingDynamic: 500.0,
        overlapPerM2: 99.95,
        entreePerM2: 99.95,
      },
    },
    applicableSteps: [
      'trapRenovatieStepTwo',
      'trapRenovatieStepThree',
      'trapRenovatieStepFour',
      'trapRenovatieStepLighting',
      'trapRenovatieStepOverlopen',
    ],
  },
  'Bekleden met laminaat': {
    pricing: {
      openStairs: {
        'Alleen boven kant': 150.0,
        Rondom: 300.0,
      },
      closedStairs: {
        Overzettrede: 235.0,
        'Met profiel': 150.0,
      },
      additionalOptions: {
        stootborden: 25.0,
        verlichtingStatic: 350.0,
        verlichtingDynamic: 500.0,
        overlapPerM2: 99.95,
        entreePerM2: 99.95,
      },
    },
    applicableSteps: [
      'trapRenovatieStepTwo',
      'trapRenovatieStepThree',
      'trapRenovatieStepFour',
      'trapRenovatieStepLighting',
      'trapRenovatieStepOverlopen',
    ],
  },
  'Bekleden met hout': {
    pricing: {
      openStairs: {
        'Alleen boven kant': 200.0,
        Rondom: 350.0,
      },
      closedStairs: {
        Overzettrede: 275.0,
        // Note: "Met profiel" is not applicable for Hout.
      },
      additionalOptions: {
        stootborden: 55.0,
        verlichtingStatic: 450.0,
        verlichtingDynamic: 650.0,
        overlapPerM2: 169.95,
        entreePerM2: 169.95,
      },
    },
    applicableSteps: [
      'trapRenovatieStepTwo',
      'trapRenovatieStepThree',
      'trapRenovatieStepFour',
      'trapRenovatieStepLighting',
      'trapRenovatieStepOverlopen',
    ],
  },
  'Bekleden met tapijt': {
    pricing: {
      openStairs: {
        Rondom: 70.0, // "Alleen boven kant" is not applicable for Tapijt
      },
      additionalOptions: {
        stootborden: 10.0,
        ondertapijt: 15.0,
        demontage: 20.0,
        overlapPerM2: 99.95,
        entreePerM2: 99.95,
      },
    },
    applicableSteps: ['trapRenovatieStepTwo', 'trapRenovatieStepThreeTapijt', 'trapRenovatieStepFourTapijt'],
  },
};
