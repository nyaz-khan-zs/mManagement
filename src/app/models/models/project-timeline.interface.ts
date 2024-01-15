import { Update } from './employee-update.interface';
export interface Data {
  date: string;
  occassion: null | string;
  updates: Update[];
  releaseNotes: any[]; // Adjust the type based on the actual structure
  meeting: any[]; // Adjust the type based on the actual structure
}
export interface EmployeeUpdate {
  name: string;
  imageUrl: string;
  update: string;
}
export interface EmployeLeave {
  name: string;
  imageUrl: string;
  status: string;
}
