import { LocalDate } from '../../../utils/local-date/local-date';

export interface UpdateRequest {
  projectId: number | null;
  employeeId: number;
  date: LocalDate;
  remarks: string;
}
