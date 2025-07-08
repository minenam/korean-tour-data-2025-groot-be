// Shared types
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  region: string;
  duration: number; // days
  season: string[];
  purpose: string[];
  carbonFootprint: number;
}

export interface CarbonFootprint {
  id: string;
  userId: string;
  courseId: string;
  totalCarbon: number;
  transportationCarbon: number;
  accommodationCarbon: number;
  activityCarbon: number;
  createdAt: Date;
}
