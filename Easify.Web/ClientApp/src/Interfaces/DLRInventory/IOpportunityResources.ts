import { IOpportunity } from "./IOpportunity";

export interface IOpportunityResources
{
    AnalysisQuarter: string;
    IsAdmin: boolean;
    IsLocked: boolean;
    Opportunities: Array<IOpportunity>;
    IsReviewer: boolean;
}