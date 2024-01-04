import { Plan } from "./plan.interface";

export interface Organisation {
    id: string | null;
    name: string;
    description: string;
    location: string;
    logo: string;
    domain: string;
    updateSpan: number;
    tasc: boolean;
    assets: boolean;
    emailNotification: boolean;
    addUpdate: boolean;
    emailNotificationSpan: number;
    meeting: boolean;
    meetingSpan: number;
    loginTime: number;
    tagOverride: boolean;
    githubSupport: boolean;
    isActive: boolean;
    isExempted: boolean;
    dues: number;
    plan: Plan
}
