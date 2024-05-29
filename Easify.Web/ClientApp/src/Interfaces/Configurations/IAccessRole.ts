import { IAudit } from "../Common/IAudit";

export interface IAccessRole extends IAudit {
    Id: number;
    Name: string;
    IsActive: boolean;
}