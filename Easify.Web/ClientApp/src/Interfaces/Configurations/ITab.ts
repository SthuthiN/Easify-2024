export interface ITab {
    Id: number;
    Module: string;
    Name: string;
    CreatedBy: string;
    CreatedOn: Date;
    ModifiedBy: string;
    ModifiedOn: Date;
    IsActive: boolean;
    IsDLR: boolean;
    DefaultSection: string;
}