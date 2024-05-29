import * as React from "react"
import './MWIconRight.scss'
export interface MWIProps {

}
export interface MWIStates {

}
export class MWIconRight extends React.Component<MWIProps, MWIStates> {

    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (
            <div>
                <svg id="mw-right-icon" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.31 80.9">

                    <g>
                        <polyline className="MW-cls-4" points="10.5 38.8 21.14 29.4 30.73 38.8" />
                        <line className="MW-cls-4" x1="21.14" y1="29.4" x2="21.14" y2="74.06" />
                        <polyline className="MW-cls-4" points="48.96 48.21 59.6 38.8 69.19 48.21" />
                        <polyline className="MW-cls-4" points="29.02 61.13 39.66 51.73 49.25 61.13" />
                        <line className="MW-cls-3" x1="59.6" y1="38.8" x2="59.6" y2="74.06" />
                        <line className="MW-cls-4" x1="39.66" y1="51.73" x2="39.66" y2="74.06" />
                        <line className="MW-cls-4" x1="5.47" y1="74.06" x2="73.84" y2="74.06" />
                    </g>
                    <path className="MW-cls-2" d="M13.05,9.99l7.92,4.31-7.92,4.31c-.39.21-.68.57-.81,1-.13.43-.08.88.14,1.27.21.39.57.68,1,.81.43.13.88.08,1.28-.13l10.62-5.78c.54-.29.88-.86.88-1.47s-.34-1.18-.87-1.47l-10.62-5.78c-.25-.13-.52-.2-.8-.2-.62,0-1.18.34-1.47.88-.21.39-.26.85-.14,1.27.13.43.41.79.81,1Z" />
                    <text className="MW-cls-1" transform="translate(28.8 19.3)"><tspan x="0" y="0">1 MW</tspan></text>
                </svg>
            </div>
        )
    }


}