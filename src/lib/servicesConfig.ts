export const servicesConfig: Record<string, Record<string, number | null>> = {
  Parketrenovatie: {
    'Schuren + polijsten + (zonder behandeling)': 20.0,
    'Schuren + polijsten + oliën naturel': 30.0,
    'Schuren + polijsten + oliën in kleur': 35.0,
    'Schuren + polijsten + hardwax naturel': 30.0,
    'Schuren + polijsten + hardwax in kleur': 35.0,
    'Schuren + polijsten + lakken in naturel': 35.0,
    'Schuren + polijsten + lakken in kleur': 46.0,
    'Schuren + polijsten + lakken met Skylt': 42.5,
    'Schuren + polijsten + olie + lak': 47.5,
    'Schuren + polijsten + lak zwartmat': 65.0,
    'Schuren + polijsten + lak wit mat': 65.0,
    'Ben ik nog niet over uit': 0.0,
    'Ik wil graag advies': 0.0,
  },
  Traprenovatie: {
    'Bekleden met PVC': null,
    'Bekleden met laminaat': null,
    'Bekleden met hout': null,
    'Bekleden met tapijt': null,
    'Bekleden met traploper': null,
    'Bekleden met linoleum': null,
    'Schuren en behandelen': null,
    'Schuren en schilderen': null,
    'Beton Ciré': null,
    'Ben ik nog niet over uit': 0.0,
    'Ik wil graag advies': 0.0,
  },
  'Vloeren leggen': {
    Parket: null,
    Laminaat: null,
    'PVC (klik)': null,
    'PVC (plak)': null,
    Tapijt: null,
    Linoleum: null,
  },
  Stofferen: {
    Vloer: 40.0,
    Tapijttegels: 30.0,
    Deurmat: null,
    Droogloopmat: null,
    'Rode loper': null,
    Bedrijfshal: null,
    'Ben ik nog niet over uit': 0.0,
    'Ik wil graag advies': 0.0,
  },
  Overig: {
    Vloerverwarming: null,
    Egaliseren: null,
    Gietvloeren: null,
    Tegelen: null,
    'Vloer verwijderen': null,
    'Natuursteen behandelen': null,
    Opslag: null,
  },
};

// Sub-services configuration
export const vloerenLeggenSubServices: Record<string, Record<string, number>> = {
  Parket: {
    'Rechte plank zwevend': 25.0,
    'Rechte plank verlijmd': 30.0,
    'Tapis verlijmd + verspijkert': 45.0,
    'Visgraat zwevend': 40.0,
    'Visgraat verlijmd': 45.0,
    'Hongaarse punt verlijmd': 45.0,
    Mozaïek: 60.0,
    'Hexagon / 3D / Patronen': 75.0,
  },
  Laminaat: {
    'Rechte plank': 15.0,
    Tegel: 15.0,
    Visgraat: 25.0,
    'Hongaarse punt': 25.0,
  },
  'PVC (klik)': {
    'Rechte plank': 17.5,
    Tegel: 17.5,
    Visgraat: 25.0,
    'Hongaarse punt': 25.0,
    'Speciale patronen': 40.0,
  },
  'PVC (plak)': {
    'Rechte plank': 15.0,
    Tegel: 15.0,
    Visgraat: 20.0,
    'Hongaarse punt': 20.0,
    'Speciale patronen': 40.0,
  },
  Tapijt: {
    Stroken: 30.0,
    Tegel: 20.0,
    Patronen: 25.0,
  },
  Linoleum: {
    Stroken: 25.0,
    Tegel: 15.0,
    Patronen: 25.0,
  },
};

// TrapRenovatie
type TraprenovatieConfigType = {
  [service: string]: {
    pricing: {
      openStairs?: {
        'Alleen boven kant'?: number;
        Rondom?: number;
      };
      closedStairs?: {
        Overzettrede?: number;
        'Met profiel'?: number;
        JobaTapijt?: number;
        Sisal?: number;
        Wol?: number;
        Tapijt?: number;
        Synthetisch?: number;
      };
      additionalOptions?: {
        stootborden?: number;
        verlichtingStatic?: number;
        verlichtingElkeTrede?: number;
        verlichtingDynamic?: number;
        antislipstrips?: number;
        ondertapijt?: number;
        demontage?: number;
        ookDeZijkanten?: number;
        Gefestonneerd?: number; // No extra per step
        EnkelGebandeerd?: number;
        DubbelGebandeerd?: number;
      };
      extraServices?: {
        overloop?: number;
        entree?: number;
        ExtraWidth80cm?: number;
        ExtraWidth90cm?: number;
        ExtraWidth100cm?: number;
        ExtraWidth70cm?: number;
      };
    };
    applicableSteps: string[];
  };
};

//TrapRenovatie Config Pricing
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
        demontage: 15.0,
        verlichtingElkeTrede: 425.0,
        verlichtingDynamic: 500.0,
      },
      extraServices: {
        overloop: 99.95,
        entree: 99.95,
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
        demontage: 15.0,
        verlichtingStatic: 350.0,
        verlichtingElkeTrede: 425.0,
        verlichtingDynamic: 500.0,
      },
      extraServices: {
        overloop: 99.95,
        entree: 99.95,
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
      },
      additionalOptions: {
        stootborden: 55.0,
        verlichtingStatic: 450.0,
        verlichtingElkeTrede: 525.0,
        verlichtingDynamic: 650.0,
        demontage: 15.0,
        antislipstrips: 12.5,
      },
      extraServices: {
        overloop: 169.95,
        entree: 169.95,
      },
    },
    applicableSteps: [
      'trapRenovatieStepTwo',
      'trapRenovatieStepThree',
      'trapRenovatieStepFourHout',
      'trapRenovatieStepLighting',
      'trapRenovatieStepOverlopen',
    ],
  },
  'Bekleden met tapijt': {
    pricing: {
      openStairs: {
        Rondom: 70.0,
      },
      closedStairs: {
        Overzettrede: 60.0,
      },
      additionalOptions: {
        stootborden: 10.0,
        ondertapijt: 10.0,
        demontage: 15.0,
        ookDeZijkanten: 20.0,
      },
      extraServices: {
        overloop: 99.95,
        entree: 99.95,
      },
    },
    applicableSteps: [
      'trapRenovatieStepTwo',
      'trapRenovatieStepThree',
      'trapRenovatieStepFourTapijt',
      'trapRenovatieStepFiveTapijt',
      'trapRenovatieStepOverlopen',
      'trapRenovatieSteapDemontreTapijit',
    ],
  },
  'Bekleden met traploper': {
    pricing: {
      closedStairs: {
        JobaTapijt: 115.0,
        Sisal: 110.0,
        Wol: 160.0,
        Tapijt: 110.0,
        Synthetisch: 110.0,
      },
      additionalOptions: {
        Gefestonneerd: 0.0, // No extra per step
        EnkelGebandeerd: 10.0,
        DubbelGebandeerd: 15.0,
        ondertapijt: 10.0,
      },
      extraServices: {
        ExtraWidth70cm: 0.0,
        ExtraWidth80cm: 25.0,
        ExtraWidth90cm: 35.0,
        ExtraWidth100cm: 45.0,
        overloop: 130.0,
        entree: 130.0,
      },
    },
    applicableSteps: [
      'trapRenovatieStepTwoTraploper',
      'trapRenovatieStepThreeTraploper',
      'trapRenovatieStepFourTraploper',
      'trapRenovatieStepFiveTraploper',
      'trapRenovatieStepOverlopen',
      'trapRenovatieSteapDemontreTapijit',
    ],
  },

  'Bekleden met linoleum': {
    pricing: {
      openStairs: {
        Rondom: 145.0,
      },
      closedStairs: {
        'Met profiel': 165.0,
      },
      additionalOptions: {
        stootborden: 10.0,
        demontage: 15.0,
        ookDeZijkanten: 12.5,
      },
    },
    applicableSteps: [
      'trapRenovatieStepTwo',
      'trapRenovatieStepThree',
      'trapRenovatieStepFourLinoleum',
      'trapRenovatieStepFiveLinoleum',
    ],
  },
  'Schuren en behandelen': {
    pricing: {
      openStairs: {
        Rondom: 82.5,
      },
      closedStairs: {
        Overzettrede: 80.0,
      },
      additionalOptions: {
        stootborden: 7.5,
        demontage: 15.0,
        ookDeZijkanten: 7.5,
      },
    },
    applicableSteps: [
      'trapRenovatieStepTwo',
      'trapRenovatieStepThree',
      'trapRenovatieStepFourBehendelen',
      'trapRenovatieStepFiveBehendelen',
    ],
  },
  'Schuren en schilderen': {
    pricing: {
      openStairs: {
        Rondom: 82.5,
      },
      closedStairs: {
        Overzettrede: 80.0,
      },
      additionalOptions: {
        stootborden: 7.5,
        demontage: 15.0,
        ookDeZijkanten: 7.5,
      },
    },
    applicableSteps: [
      'trapRenovatieStepTwo',
      'trapRenovatieStepThree',
      'trapRenovatieStepFourSchilderen',
      'trapRenovatieStepFiveSchilderen',
    ],
  },
  'Beton Ciré': {
    pricing: {
      openStairs: {
        Rondom: 185.0,
      },
      closedStairs: {
        Overzettrede: 175.0,
      },
      additionalOptions: {
        stootborden: 10.0,
        demontage: 15.0,
        ookDeZijkanten: 12.5,
      },
    },
    applicableSteps: [
      'trapRenovatieStepTwo',
      'trapRenovatieStepThree',
      'trapRenovatieStepFourBetonCire',
      'trapRenovatieStepFiveBetonCire',
    ],
  },
};
