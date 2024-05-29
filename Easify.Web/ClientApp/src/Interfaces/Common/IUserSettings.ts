import { IAudit } from "./IAudit";

export interface IUserSettings extends IAudit {
    Id: number;
    Email: string;
    Theme: string;
}
