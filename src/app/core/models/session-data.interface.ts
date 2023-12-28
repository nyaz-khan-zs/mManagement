export interface SessionData {
    token: string;
    userData: GoogleUserData;
    accessTokenForNewOrg?: string;
}

export interface GoogleUserData {
    roles: string[];
    employeeId: string;
    authToken: string;
    tenantId: string;
    organizationName: string;
    timezone: string;
    subOrdinates: number[];
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImage: string;
    domain: string;
    accessToken: string;
    designation?: string;
    id?: number;
    profileUrl?: string;
    gender?: string;
    refreshToken?: string;
}
