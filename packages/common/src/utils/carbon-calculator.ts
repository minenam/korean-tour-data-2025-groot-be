// Carbon footprint calculation utilities
export interface CarbonFactors {
  transportation: number; // gCO2/km
  accommodation: number; // kgCO2/night
  activity: number; // kgCO2/hour
}

export const calculateTransportationCarbon = (distance: number, factor: number): number => {
  return distance * factor;
};

export const calculateAccommodationCarbon = (nights: number, factor: number): number => {
  return nights * factor;
};

export const calculateActivityCarbon = (hours: number, factor: number): number => {
  return hours * factor;
};
