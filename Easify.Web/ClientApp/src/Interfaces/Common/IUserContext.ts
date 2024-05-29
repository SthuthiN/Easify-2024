import { IAudit } from "../Common/IAudit";
export interface IUserContext extends IAudit {
    Id: number;
    Name: string;
    Email: string;
    IsActive: boolean;
    Role: string;
    RoleId: number;
    IsAdmin?: boolean;
    hasAccess: boolean;
    IsCacheExists: boolean;
    DefaultTabId: number;
    DefaultRegionId: number;
    IsDLR: boolean;
}

export interface IWebTour {
    element: string;
    intro: string;
    title: string;
}
