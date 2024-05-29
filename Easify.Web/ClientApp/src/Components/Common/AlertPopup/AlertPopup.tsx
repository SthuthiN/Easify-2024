import * as React from 'react';
import { XCircleFill } from 'react-bootstrap-icons';

import { ConfirmStatus } from '../../../Common/Enums';
import './AlertPopup.scss'

export interface IProps {
    title: string;
    body: string;
    onConfirmAction: any;
    onCancelAction: any;
}

export interface IState {

}

export class AlertPopup extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
    }

    render() {
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <h6 className="modal-title">{!!this.props.title ? this.props.title : 'Confirmation'}</h6>
                    <XCircleFill onClick={() => this.props.onCancelAction(ConfirmStatus.Cancel)} />
                </div>
                <div className="modal-body py-4">
                    <p className="m-0">{this.props.body}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => this.props.onCancelAction(ConfirmStatus.Cancel)}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.onConfirmAction(ConfirmStatus.Confirm)}>Confirm</button>
                </div>
            </div>
        );
    }
}