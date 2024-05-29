import { IDLRInventory } from "./IDLRInventory";

export interface IDLRInventoryResources
{
    AnalysisQuarter?: string;
    IsAdmin?: boolean;
    IsLocked?: boolean;
    DLRInventories: Array<IDLRInventory>;
    IsReviewer: boolean;
}