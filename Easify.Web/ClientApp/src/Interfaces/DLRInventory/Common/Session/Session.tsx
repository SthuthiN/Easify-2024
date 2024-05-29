import * as React from "react";
import './Session.scss';
import { Redirect } from "react-router";

interface ISessionProps{
    isRefresh?: boolean; 
}

interface ISessionState{
    isRedirect: boolean;
}

class SessionComponent extends React.Component<ISessionProps, ISessionState> {
    constructor(props: ISessionProps, state: ISessionState) {
        super(props);
        this.state = {
            isRedirect: !this.props.isRefresh
        }
    }
    
    public pageReload = () =>{
        window.location.reload();
    }
    
    render() {
        return (
            <div className="error-dashboard m-2 p-2">
                {!this.props.isRefresh && this.state.isRedirect && <Redirect to='/'/>}
                <div className="error-symbol mr-2">
                    <i className="fa fa-ban align-middle"></i>
                </div>
                <div className="error-text">
                    <span className="mr-2">Your Session Has Expired !</span>
                    <span className="dashboard-link"><a href="#" onClick={this.pageReload}>Click Here</a> to Refresh your Session !!!</span>
                </div>
            </div>
        );
    }
}

export default SessionComponent