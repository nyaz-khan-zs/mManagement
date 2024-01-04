import { Gender } from '../../utils/enum/gender.enum';
import { LocalDate } from '../..//utils/local-date/local-date';

export interface Employee {
  id: number;
  name: string;
  location: string | null;
  email: string;
  designation: string;
  joiningDate: LocalDate | null;
  reportingTo: number;
  employeeId: string | null;
  profileUrl: string;
  viewTimeline: boolean;
  isActive: boolean;
  removalDate: LocalDate | null;
  exempted: boolean;
  officeLocation: string | null;
  githubUsername: string | null;
  gender: Gender;
  numberOfSubOrdinates: number;
}
