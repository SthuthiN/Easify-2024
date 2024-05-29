import { IComparables } from "./IComparables";

export interface IComparablesResources
{
    AnalysisQuarter: string;
    IsAdmin: boolean;
    IsLocked: boolean;
    Comparables: Array<IComparables>;
    IsReviewer: boolean;
}