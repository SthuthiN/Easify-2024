import * as React from "react";
import './Unauthorized.scss';

interface IUnauthorizedProps {
}

interface IUnauthorizedState {
}

class UnauthorizedComponent extends React.Component<IUnauthorizedProps, IUnauthorizedState> {
    constructor(props: IUnauthorizedProps, state: IUnauthorizedState) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="error-unauthorized m-2 p-2">
                <div className="error-symbol mr-2">
                    <i className="fa fa-ban align-middle"></i>
                </div>
                <div className="error-text">
                    <span className="mr-2">You are not authorized to access this page</span>
                </div>
            </div>
        );
    }
}

export default UnauthorizedComponent