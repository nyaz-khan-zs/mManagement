import { Employee } from "./employee.interface";

export interface SubordinatesData {
    directReportees: number;
    indirectReportees: number;
    directReporteesDetails: Employee[];
    indirectReporteesDetails: Employee[];
}
