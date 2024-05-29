import * as React from "react"
import './MWLeftIcon.scss'
export interface MWIProps {

}
export interface MWIStates {

}
export class MWIconLeft extends React.Component<MWIProps, MWIStates> {

    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (
            <div>
                <svg id="mw-left-icon" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.31 80.9">

                    <g>
                        <rect className="cls-4" x="8.88" y="25.65" width="61.55" height="15.88" rx="2.59" ry="2.59" />
                        <path className="cls-3" d="M12.67,30.35c-.69,0-1.24-.56-1.24-1.24s.56-1.24,1.24-1.24,1.24.56,1.24,1.24-.56,1.24-1.24,1.24Z" />
                        <rect className="cls-5" x="42.91" y="31.07" width="19.5" height="5.03" />
                        <rect className="cls-4" x="8.88" y="46.32" width="61.55" height="15.88" rx="2.59" ry="2.59" />
                        <path className="cls-3" d="M12.67,51.02c-.69,0-1.24-.56-1.24-1.24s.56-1.24,1.24-1.24,1.24.56,1.24,1.24-.56,1.24-1.24,1.24Z" />
                        <rect className="cls-5" x="42.91" y="51.74" width="19.5" height="5.03" />
                        <polygon className="cls-2" points="70.43 71.47 45.43 71.47 45.43 70.57 41.54 70.57 41.54 65.15 37.78 65.15 37.78 70.57 33.89 70.57 33.89 71.47 8.88 71.47 8.88 75.23 33.89 75.23 33.89 76.14 45.43 76.14 45.43 75.23 70.43 75.23 70.43 71.47" />
                    </g>
                    <path className="cls-2" d="M24.88,16.52l-7.92-4.31,7.92-4.31c.39-.21.68-.57.81-1,.13-.43.08-.88-.14-1.27-.21-.39-.57-.68-1-.81-.43-.13-.88-.08-1.28.13l-10.62,5.78c-.54.29-.88.86-.88,1.47s.34,1.18.87,1.47l10.62,5.78c.25.13.52.2.8.2.62,0,1.18-.34,1.47-.88.21-.39.26-.85.14-1.27-.13-.43-.41-.79-.81-1Z" />
                    <text className="cls-1" transform="translate(28.41 17.22)"><tspan x="0" y="0">1 MW</tspan></text>
                </svg>
            </div>
        )
    }


}