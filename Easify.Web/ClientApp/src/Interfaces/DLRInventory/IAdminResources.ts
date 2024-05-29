import { IUser } from './Common/IUser';

export interface IAdminResources
{
    AnalysisQuarter: string;
    IsAdmin: boolean;
    IsReviewer: boolean;
    IsLocked: boolean;
    Admins: Array<IUser>;
    Members: Array<IUser>;
    Reviewers: Array<IUser>;
}