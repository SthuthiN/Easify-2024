import * as React from 'react';
import { SpinnerSize, Spinner } from "office-ui-fabric-react";
import './LoaderStyles.scss';

class Loader extends React.Component<{}, {}>{
    constructor() {
        super(true);
    }
    public render() {
        return (
            <div className="spinner-container">
                <Spinner size={SpinnerSize.large} />
            </div>
        );
    }
}

export default Loader