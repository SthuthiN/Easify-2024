﻿export interface IOpportunity {
    ID: number;
    Market: string;
    Property: string;
    OpportunityOwner: string;
    OpportunityName: string;
    Stage: string;
    ProductType: string;
    SupplyDemandRating: string;
    Region?: string;
    Probability: number;
    QuarterID?: number;
    Industry?: string;
    TotalKW: number;
    RaisedSqFt: number;
    RentableSf: number;
    AnnualizedGAAPRent?: number;
    TransactionType?: string;
    DateModified?: Date;
    ModifiedBy?: string;
    IsActive?: boolean;
    IsNew?: boolean;
    IsUpdated?: boolean;
    DateCreated?: Date;
    RCFirstMonthRent?: number;
    StartingKW: number;
    AverageRent: number;
    AverageKW: number;
    IsModified?: boolean;
    IsValidRecord?: boolean;
}