import * as React from 'react';
import './ConfirmationPopup.scss';
import { IModalProps } from 'office-ui-fabric-react/lib/Modal';
import { Dialog, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton } from 'office-ui-fabric-react';

export interface IConfirmationPopupProps {
    showConfirmation: boolean;
    toggleShowConfirmation: any;
    onConfirmation: any;
    confirmationText: string;
}
export interface IConfirmationPopupState {
}

class ConfirmationPopupComponent extends React.Component<IConfirmationPopupProps, IConfirmationPopupState>{

    modalProps: IModalProps = {
        isBlocking: true
    };

    constructor(props: IConfirmationPopupProps) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Dialog
                    hidden={!this.props.showConfirmation}
                    onDismiss={this.props.toggleShowConfirmation}
                    modalProps={this.modalProps}
                    containerClassName="confirmation-popup-container"
                >
                    {this.props.confirmationText}
                    <DialogFooter>
                        {
                            <React.Fragment>
                                <DefaultButton text="Yes" className={"btn cta-button pt-1 pb-1 pl-4 pr-4"} onClick={this.props.onConfirmation} />
                                <DefaultButton text="No" className={"btn cta-button pt-1 pb-1 pl-4 pr-4 ml-2"} onClick={this.props.toggleShowConfirmation} />
                            </React.Fragment>
                        }
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }
}
export default ConfirmationPopupComponent;