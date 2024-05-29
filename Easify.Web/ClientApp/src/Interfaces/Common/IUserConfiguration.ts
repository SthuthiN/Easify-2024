import { IAudit } from "./IAudit";

export interface IUserConfiguration extends IAudit {
    Id: number;
    EmailId: number;
    Email: string;
    DefaultSectionId: number;
    DefaultSection: string;
    DefaultTabId: number;
    DefaultRegionId: number;
    DefaultModuleId: number;
    DefaultTab: string;
    DefaultModule: string;
    DefaultRegion: string;
    Name: string;
    IsDLR?: boolean;
}