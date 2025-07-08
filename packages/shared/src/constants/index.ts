// Shared constants
export const CARBON_FACTORS = {
  TRANSPORTATION: {
    CAR: 170, // gCO2/km
    BUS: 105,
    TRAIN: 41,
    PLANE: 255,
  },
  ACCOMMODATION: {
    TRADITIONAL_HANOK: 0.8, // kgCO2/night
    HOTEL: 2.5,
    GUESTHOUSE: 1.2,
  },
  ACTIVITY: {
    TREKKING: 0.2, // kgCO2/hour
    ATV_EXPERIENCE: 1.5,
    CULTURAL_EXPERIENCE: 0.1,
  },
} as const;

export const REGIONS = ['의성', '구미', '안동', '영동'] as const;

export const SEASONS = ['봄', '여름', '가을', '겨울'] as const;

export const PURPOSES = ['힐링', '모험', '학습형'] as const;
