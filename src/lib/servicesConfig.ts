export const servicesConfig: Record<string, Record<string, number | null>> = {
  parketRenovatie: {
    'Schuren + polijsten + (zonder behandeling)': 17.5,
    'Schuren + polijsten + oliën naturel': 30.0,
    'Schuren + polijsten + oliën in kleur': 32.5,
    'Schuren + polijsten + lakken in naturel': 36.0,
    'Schuren + polijsten + lakken in kleur': 46.0,
    'Schuren + polijsten + hardwax naturel': 30.0,
    'Schuren + polijsten + hardwax in kleur': 35.0,
    'Schuren + polijsten + lakken met Skylt': 35.0,
    'Ben ik nog niet over uit': 0.0,
    'Ik wil graag advies': 0.0,
  },
  Traprenovatie: {
    'Bekleden met PVC': 150.0,
    'Bekleden met laminaat': 80.0,
    'Bekleden met hout': 120.0,
    'Bekleden met tapijt': 0.0,
    'Bekleden met linoleum': 0.0,
    'Schuren en behandelen': 0.0,
    'Schuren en schiledren': 0.0,
    'Ben ik nog niet over uit': 0.0,
    'Ik wil graag advies': 0.0,
  },
  vloerenLeggen: {
    'Parket leggen': null, // Main services don't have direct prices
    'Laminaat leggen': null,
    'PVC leggen': null,
    'Tapijt leggen': null,
    'Linoleum leggen': null,
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
  'Parket leggen': {
    'Rechte plank zwevend': 25.0,
    'Rechte plank verlijmd': 30.0,
    'Tapis verlijmd + verspijkert': 45.0,
    'Visgraat zwevend': 40.0,
    'Visgraat verlijmd': 45.0,
    'Hongaarse punt verlijmd': 45.0,
    Mozaik: 60.0,
    'Hexagon / 3D / Patronen': 75.0,
  },
  'Laminaat leggen': {
    'Rechte plank': 15.0,
    Tegel: 15.0,
    Visgraat: 25.0,
    'Hongaarse punt': 25.0,
  },
  'PVC leggen': {
    'Rechte plank': 17.5,
    Tegel: 17.5,
    Visgraat: 25.0,
    'Hongaarse punt': 25.0,
    'Speciale patronen': 40.0,
  },
  'Tapijt leggen': {
    Stroken: 30.0,
    Tegel: 20.0,
    Patronen: 25.0,
  },
  'Linoleum leggen': {
    Stroken: 25.0,
    Tegel: 15.0,
    Patronen: 25.0,
  },
};
