import { Callout, DirectionalHint ,} from "office-ui-fabric-react";
import * as React from "react";
import { IThemeContextProps, ThemeName } from "../../../Theme/Model";
import "./CallOut.scss";

export interface ICallOutProps {
    id: string;
    src: string;
    changeTheme: any;
    theme: IThemeContextProps;
}

export interface ICallOutState {
    isCalloutVisible: boolean;
}
export class CallOut extends React.Component<ICallOutProps,ICallOutState> {

    constructor(props: ICallOutProps) {
        super(props);
        this.state =  {
            isCalloutVisible: false,

        }
        this.changThemes = this.changThemes.bind(this)
    }
    

    changThemes(color) {
        this.props.changeTheme(ThemeName[color])
        this.setState({ isCalloutVisible: false })
    }

    render() {
        return (<>
            <div className="selected-theme">
                <img alt="" className="theme-icon " src={this.props.src} onClick={() => this.setState({ isCalloutVisible: !this.state.isCalloutVisible })} />
            </div>
            {this.state.isCalloutVisible && <Callout className="callout-size" target={'#' + this.props.id} setInitialFocus onDismiss={() => this.setState({ isCalloutVisible: !this.state.isCalloutVisible })} ariaDescribedBy={this.props.id + "Des"} role="alertdialog" directionalHint={DirectionalHint.bottomCenter}>
                <div className="row themes">
                    {ThemeName && Object.values(ThemeName).map((theme, index) => {
                        return(
                            <div className="col" key={index} >
                                <div className={`${theme} color-box cursor-pointer ${this.props.theme.themeType === theme ? "select-theme" : ""}`} id={theme} onClick={() => this.changThemes(theme)}></div>
                        </div>)
                    })}
                </div > 
            </Callout>}
        </>
       )}
    }