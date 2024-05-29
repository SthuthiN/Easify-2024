import * as React from 'react';
import './AccessDenied.scss'
export class AccessDenied extends React.Component<{}, {}>{

    render() {
        return (
            <>
               
                <div className="error-dashboard m-2 p-2">
                    {/*{!this.props.isRefresh && this.state.isRedirect && <Redirect to='/' />}*/}
                    <div className="error-symbol mr-2">
                        {/*<i className="fa fa-ban align-middle"></i>*/}
                    </div>
                    <div className="error-text">
                        <span className="mr-2">Access Denied ! Please contact administrator for access.</span>
                        {/*k<span className="dashboard-link"><a href="#" onClick={this.pageReload}>Click Here</a> to Refresh your Session !!!</span>*/}
                    </div>
                </div>
            </>
        )
    }

}
