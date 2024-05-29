import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { NotificationContainer } from "react-notifications";
import './App.scss';
import '../../Common/NotificationStyles.scss';
import { IUserContext } from '../../Interfaces/Common/IUserContext';
import { ProtectedRoute } from './ProtectedRoute';
import Loader from '../Common/Loader/Loader';
import { DashboardService } from '../../Services/DashboardService';
import { ComponentRoute } from '../../Common/ComponentRoute';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Utility } from '../../Services/Common/Utility';
import { AccessDenied } from '../AccessDenied/AccessDenied';
initializeIcons(/* optional base url */);
interface IAppProps { }

interface IAppState {
    activePage: string;
    isLoading: boolean;
    userContext: IUserContext;
    previousPage: string;
}

export class App extends React.Component<IAppProps, IAppState> {

    private _dashboardService: DashboardService;
    private _utility: Utility;

    pathName: string;
    isUserLoaded: boolean = false;
    idleTimer: any;

    constructor(props: IAppProps) {
        super(props);
        this._utility = new Utility();
        this._dashboardService = new DashboardService();
        this.pathName = window.location.href.split(window.location.origin)[1];
        this.idleTimer = null;

        this.state = {
            activePage: ComponentRoute.Dashboard,
            previousPage: ComponentRoute.Dashboard,
            isLoading: true,
            userContext: { Name: '', Email: '', IsAdmin: false, RoleId: 0, hasAccess: false } as IUserContext
        };
    }
    componentWillMount() {
    }


    getActivePage() {
        //this.setState({
        //    activePage: 
        //})
    }

    updateActivePage = (tab: string) => {
        this.setState({
            previousPage: this.state.activePage,
            activePage: tab
        });
    }

    getUserContext() {
        this._dashboardService.getUserContext().then((user: IUserContext) => {
            this.isUserLoaded = true;
            this.setState({
                userContext: !!user ? user : this.state.userContext,
                isLoading: false,
                activePage:user?.hasAccess === false ? ComponentRoute.AccessDenided : (this.pathName === ComponentRoute.Dashboard) ? ComponentRoute.Dashboard : this.pathName
            }, () => {
            })
        }, error => {
            this.setState({
                isLoading: false
            });
        })
    }

    render() {
        const { userContext } = this.state;
        return (
            <Router>
                {/*{this.state.isLoading && <Loader />}*/}

                {/*<NotificationContainer />*/}
                {/*{this.isUserLoaded && !userContext.hasAccess && <AccessDenied />}*/}
                {/*{this.isUserLoaded && userContext.hasAccess && <div className="container-fluid p-0">*/}
                {/*    <Switch>*/}
                {/*        <ProtectedRoute exact path={ComponentRoute.AccessDenided} component={AccessDenied} updateActivePage={ComponentRoute.AccessDenided} userContext={this.state.userContext} hasPermission={true} {...this.props} />*/}
                {/*    </Switch>*/}
                {/*</div>}*/}
            </Router>
        );
    }

}