import { Leave } from "./leave.interface";
import { Meeting } from "./meeting.interface";
import { Update } from "./update.interface";
import { LocalDate } from "../utils/local-date/local-date";

export interface Timeline {
    date: LocalDate,
    leaves: Leave[] | null,
    holiday: { reason: string | null },
    meeting: Meeting[] | null,
    isExempted: boolean,
    officeLocation: string,
    updates: Update[];
    isEditable: true
}