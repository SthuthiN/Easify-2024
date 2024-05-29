import { HttpService } from '../Services/Common/HttpService';
import { APIRoute } from '../Common/APIRoute';
export class DashboardService implements IDashboardService{

    private httpSerivce: HttpService;

    constructor() {
        this.httpSerivce = new HttpService();
    }

    getUserContext() {
        return this.httpSerivce.getData(APIRoute.GetUserContext);
    }
}

export interface IDashboardService {
   
}