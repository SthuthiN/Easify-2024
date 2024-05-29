import { HttpService } from '../Services/Common/HttpService';
import * as APIConnections from "../Assets/APIConnections";
import { IOperationStatus } from "../Interfaces/DLRInventory/Common/IOperationStatus";
import { IAdminResources } from "../Interfaces/DLRInventory/IAdminResources";
import { IUser } from '../Interfaces/DLRInventory/Common/IUser';

export class AdminService {
    private _http: HttpService;
    headers: any;
    constructor()
    {
        this._http = new HttpService();
    }

    isAdmin(): Promise<boolean> {
        return this._http.getData(APIConnections.isAdmin);
    }

    getCurrentUser(): Promise<IUser> {
        return this._http.getData(APIConnections.GetCurrentUser);
    }

    getAdminResources(): Promise<IAdminResources> {
        return this._http.getData(APIConnections.GetAdminResources);
    }

    getAdminResourcesWithUsers(): Promise<IAdminResources> {
        return this._http.getData(APIConnections.GetAdminResourcesWithUsers);
    }

    loadPreviousQuarterDataAndChangeQuarter(): Promise<IOperationStatus> {
        return this._http.patchData(APIConnections.LoadPreviousQuarterDataAndChangeQuarter, {});
    }

    lockOrUnLockQuarter(isLock: boolean): Promise<IOperationStatus> {
        return this._http.patchData(APIConnections.LockOrUnLockQuarter, { "IsLocked": isLock });
    }

    deleteUser(user: IUser): Promise<IOperationStatus> {
        return this._http.patchData(APIConnections.DeleteUser, user);
    }

    addUser(user: IUser): Promise<IOperationStatus> {
        return this._http.patchData(APIConnections.AddUser, user);
    }

    getUsersBySearch(text: string): Promise<Array<IUser>> {
        return this._http.getData(`${APIConnections.GetUsersBySearch}?text=${text}`);
    }
}


export interface IAdminService {
    isAdmin(): Promise<boolean>;
    loadPreviousQuarterDataAndChangeQuarter(): Promise<IOperationStatus>;
    lockOrUnLockQuarter(isLock: boolean): Promise<IOperationStatus>;
    getAdminResources(): Promise<IAdminResources>;
    getAdminResourcesWithUsers(): Promise<IAdminResources>;
    deleteUser(user: IUser): Promise<IOperationStatus>;
    addUser(user: IUser): Promise<IOperationStatus>;
    getUsersBySearch(text: string): Promise<Array<IUser>>;
    getCurrentUser(): Promise<IUser>
}