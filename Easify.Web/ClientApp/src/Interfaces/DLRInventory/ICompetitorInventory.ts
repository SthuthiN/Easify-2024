export interface ICompetitorInventory {
    ID?: number;
    Region: string;
    Company?: string;
    Address?: string;
    QuarterID?: number;
    Market: string;
    Suite?: string;
    ProductType?: string;
    SF?: number;
    ITLoadMW?: number;
    SuiteCondition?: string;
    ITLoadKW?: number;
    DateAvailable?: string;
    Provider?: string;
    QuarterAvailable?: string;
    Source?: string;
    DateModified?: Date;
    ModifiedBy?: string;
    IsActive?: boolean;
    IsNew?: boolean;
    DateCreated?: Date;
    IsModified?: boolean;
    IsValidRecord?: boolean;
}