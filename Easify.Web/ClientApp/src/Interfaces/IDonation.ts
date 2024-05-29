import { IUploadFile } from "./Common/IUploadFile";

export interface ReportsMeta {
    Donations: Array<IDonation>;
    Comments: Array<CommentsHistory>;
}

export interface IDonation {
    ID: number;
    OrganizationName: string;
    OrganizationWebsiteUrl: string;
    DonatedAmount_InUserCurrency?: number;
    CurrencyType: string;
    DonatedAmount_USD?: number;
    MatchDonation_USD?: number;
    MaxDonation_USD?: number;
    DonatedOn: string;
    Purpose: string;
    Receipt: string;
    Attachment: IUploadFile;
    TaxId: string;
    OrganizationAddress: string;
    IsAffiliated: boolean;
    IsIndirect?: boolean;
    IsPolicyAccepted?: boolean;
    CreatedEmployeeName: string;
    CreatedBy: string;
    CreatedOn?: any;
    ApprovalStatus: string;
    UserType: string;
    CurrentStage: number;
    CurrentGroup: number;
    StageStatus: string;
    Comment: string;
    CommentsHistory: Array<CommentsHistory>;
    JobLevel: number;
    CorporateCounselOn?: Date;
    Team1ApprovedOn?: Date;
    Team2ApprovedOn?: Date;
    AdminApprovedOn?: Date;
    PaidApprovedOn?: Date;
    IsSelected: boolean;
    CanApprove: boolean;
}

export interface CommentsHistory {
    DonationID: number;
    EmployeeName: string;
    ModifiedBy: string;
    CommentedOn: string;
    Stage: number;
    Comment: string;
    IsApproved: boolean;
}

export interface IDonationReq {
    DonationID: number;
    CurrentStage: number;
    Comment: string;
}

export interface IAddDonationMeta {
    ExchangeRates: Array<IExchangeRate>;
    DonationLimits: IDonationLimits;
    ExistingDonations: Array<IExistingDonation>;
}

export interface IExistingDonation {
    Year: number;
    ExisitngDonations: number;
    Remaining: number;
}

export interface IDonationLimits {
    MinLimit: number;
    MaxLimit: number;
}

export interface IExchangeRate {
    ID: number;
    Name: string;
    Code: string;
    Symbol: string;
    Exchangerate: number;
    IsActive: boolean;
    Isvisible: boolean;
    IsDefault: boolean;
    CurrentYear: number;
}