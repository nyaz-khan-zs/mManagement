export interface Node {
  id: number;
  parentId: number | null;
  name: string;
  positionName: string;
  img: string | null;
  size: number;
}

export interface User {
  id: number;
  name: string;
  location: string | null;
  email: string;
  designation: string;
  joiningDate: string;
  reportingTo: number | null;
  employeeId: string;
  profileUrl: string | null;
  viewTimeline: boolean;
  isActive: boolean;
  removalDate: string | null;
  exempted: boolean;
  officeLocation: string | null;
  githubUsername: string | null;
  gender: string | null;
  numberOfSubOrdinates: number;
}
