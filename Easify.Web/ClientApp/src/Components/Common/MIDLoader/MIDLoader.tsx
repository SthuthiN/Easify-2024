import * as React from 'react';
import './MIDLoader.scss';
import logo from './../../../../public/Logo.png';
import ContentComponent from './Content/Content';
import { Logo } from '../../../Common/SVGIcons/MIDLogo/Logo';
export interface IMIDLoaderProps {
    closeLoader: any;
    show:boolean;
    startTour:any;
    isLoaded:boolean;
}
class MIDLoaderComponent extends React.Component<IMIDLoaderProps, {}>{
    render() {
        return (
            this.props.show && <div className="progress-overlay">
                <div className="loader-container">
                    <div className="logo-header d-grid justify-content-center py-3">
                        <Logo/>
                    </div>
                    <div className="body p-3"><ContentComponent/></div>
                    <div className="footer d-flex px-5">
                        <div className={`ms-0 me-auto link ${!this.props.isLoaded?"disabled":""}`} onClick={()=>this.props.isLoaded && this.props.startTour(true)}>{`Tutorial`}</div>
                        <div className="ms-auto me-0 link" onClick={() => this.props.closeLoader()}>{`Continue to MID`}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MIDLoaderComponent;