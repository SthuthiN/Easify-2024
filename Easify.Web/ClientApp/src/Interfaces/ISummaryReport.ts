import { IDonation } from "./IDonation";

export interface ISummaryReport {
    EmployeeName: string;
    Donations: Array<IDonation>;
    Total?: number;
}