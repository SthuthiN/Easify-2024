import { HttpService } from '../Services/Common/HttpService';
import { APIRoute } from '../Common/APIRoute';
import { IUserContext } from '../Interfaces/Common/IUserContext';
import { IUserConfiguration } from '../Interfaces/Common/IUserConfiguration';

export class ConfigurationService implements IConfigurationService {

    private httpSerivce: HttpService;

    constructor() {
        this.httpSerivce = new HttpService();
    }

    getResources() {
        return this.httpSerivce.getData(APIRoute.GetConfigurationResources);
    }

    getUserRoles() {
        return this.httpSerivce.getData(APIRoute.ConfigurationUserRoles);
    }

    deleteUserRole(id: number) {
        return this.httpSerivce.deleteData(`${APIRoute.ConfigurationUserRoles}/${id}`);
    }

    createOrUpdateUserRole(userRole: IUserContext) {
        return this.httpSerivce.postData(APIRoute.ConfigurationUserRoles, userRole);
    }
    getReportTabs() {
        return this.httpSerivce.getData(`${APIRoute.GetReportTabs}`);
    }
    getUserConfigurations() {
        return this.httpSerivce.getData(`${APIRoute.UserConfigurations}`);
    }
    createOrUpdateUserConfiguration(userConfiguration: IUserConfiguration) {
        return this.httpSerivce.postData(APIRoute.UserConfigurations, userConfiguration);
    }
    getSharePointUsers() {
        return this.httpSerivce.getData(`${APIRoute.GetSharePointUsers}`);
    }
    deleteUserConfiguration(email: string) {
        return this.httpSerivce.deleteData(`${APIRoute.UserConfigurations}/${email}`); 
    }
}

export interface IConfigurationService {
    getResources();
    getUserRoles();
    deleteUserRole(userRoleId: number);
    createOrUpdateUserRole(userRole: IUserContext);
    getReportTabs();
    getUserConfigurations();
    getSharePointUsers();
    createOrUpdateUserConfiguration(userConfiguration: IUserConfiguration);
    deleteUserConfiguration(email: string);
}