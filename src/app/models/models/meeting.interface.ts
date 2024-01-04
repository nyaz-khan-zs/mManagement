import { Employee } from './employee.interface';
import { LocalDate } from '../../utils/local-date/local-date';

export interface Meeting {
  id: number;
  manager: Employee;
  employee: Employee;
  remarks: string;
  isPrivate: boolean;
  date: LocalDate;
}
