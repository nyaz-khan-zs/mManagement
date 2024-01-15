export interface Update {
  employee: {
    id: number;
    name: string;
    employeeId: string;
    email: string;
    joiningDate: string;
    designation: string;
    location: string;
    timezone: string;
    profileUrl: string;
    isActive: boolean;
    removalDate: null | string; // Can be either null or a string
    currentlyExempted: boolean;
    gender: string;
  };
  update: {
    remarks: string;
    id: number;
  } | null;
  leaves:
    | {
        leave: string;
        leaveType: null | string;
        status: string;
        reason: null | string;
      }[]
    | null;
  isExempted: boolean;
  officeLocation: string;
  holiday: null | string;
  exempted: boolean;
  unknownProperty?: any;
}
