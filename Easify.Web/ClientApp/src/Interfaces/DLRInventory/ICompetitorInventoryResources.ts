import { ICompetitorInventory } from "./ICompetitorInventory";

export interface ICompetitorInventoryResources
{
    AnalysisQuarter: string;
    IsAdmin: boolean;
    IsLocked: boolean;
    CompetitorInventories: Array<ICompetitorInventory>;
    IsReviewer: boolean;
}