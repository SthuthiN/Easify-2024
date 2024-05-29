import * as React from 'react';
import { SupportErrorMessages } from '../../../Common/Enums';
import { IEmail } from '../../../Interfaces/Dashboard/IEmail';
import { Utility } from '../../../Services/Common/Utility';
import './Support.scss';
import closeIcon from './../../../Assets/Icons/closeIcon.png';
import Loader from '../Loader/Loader';

export interface FormErrorMessages {
    IsTitleSizeError?: boolean;
    IsDescriptionSizeError?: boolean;
    IsTitleRequired?: boolean;
    IsDescriptionRequired?: boolean;
    IsImageSizeError?: boolean;
}
export interface ISupportProps {
    close: any;
    sendMail: any;
    isMailSent: boolean;
    isResponsive: boolean;
}

export interface ISupportState {
    isSendClicked: boolean;
    email: IEmail;
    showErrorMessage: FormErrorMessages;
}
class SupportComponent extends React.Component<ISupportProps, ISupportState>{
    private _utility: Utility;
    initialMail: IEmail = {
        Message: "",
        Title: "",
        Attachment: null
    }

    constructor(props: ISupportProps) {
        super(props);

        this.state = {
            isSendClicked: false,
            email: {} as IEmail,
            showErrorMessage: {} as FormErrorMessages
        }
        this._utility = new Utility();
    }


    onChange = async (event: any) => {
        if (event !== null && event !== undefined) {
            const { name, value } = event.target;
            const updatedMail = { ...this.state.email };
            var errorMessage: FormErrorMessages = {
                IsTitleSizeError: false,
                IsDescriptionSizeError: false,
                IsImageSizeError : false
            }
            if (event.target.name === "title") {
                updatedMail.Title = value;
                errorMessage.IsTitleSizeError = updatedMail.Title.length >= 73 ? true : false;
            }
            else if (event.target.name === "query") {
                updatedMail.Message = value;
                errorMessage.IsDescriptionSizeError = event.target.value.length >= 500 ? true : false;
            }
            else if (event.target.name === "attachment") {
                if (event.target.files.length > 0) {
                    var file = event.target.files[0];
                    var size = file.size;
                    var sizeInMb = size / Math.pow(1024, 2)
                    if (sizeInMb <= 4) {
                        await this._utility.convertImageToBlob(file).then(blob => {
                            updatedMail.Attachment = blob as Blob;
                        })
                    }
                    else {
                        event.target.value = "";
                        updatedMail.Attachment = null;
                    }
                }
                errorMessage.IsImageSizeError = (updatedMail.Attachment === null || updatedMail.Attachment === undefined) ? true : false 
            }
            this.setState({ email: updatedMail, showErrorMessage: errorMessage})
        }
    }

    sendEmail() {
        this.setState({ isSendClicked: true });
        var errorMessage: FormErrorMessages = {
            IsTitleRequired: false,
            IsDescriptionRequired: false
        }
        errorMessage.IsTitleRequired = !!this.state.email?.Title && this.state.email?.Title?.trim() !== "" ? false : true;
        errorMessage.IsDescriptionRequired = !!this.state.email?.Message && this.state.email?.Message?.trim() !== "" ? false : true;
        if (!errorMessage.IsTitleRequired && !errorMessage.IsDescriptionRequired) {
            this.props.sendMail(this.state.email);
            this.setState({
                showErrorMessage: errorMessage
            })
        }
        else {
            this.setState({ showErrorMessage: errorMessage, isSendClicked: false });
        }
    }

    render() {
        return (<>
            {this.state.isSendClicked && !this.props.isMailSent && < Loader />}
            <div className={`${this.props.isResponsive ? "support-parent-container" : ""}`}>
            <div className="support-container">
                <div className="support-header p-2 d-flex">
                    <div>Support</div>
                    <div className="ms-auto me-0" onClick={() => this.props.close()}><img className="close-icon" src={closeIcon} /></div>
                </div>
                <div className="support-body p-2">
                    <form>
                        <div className="form-group row m-0 p-2">
                            <label className="col-sm-3 col-form-label ps-0">Title <span className="text-danger">*</span></label>
                            <div className="col-sm-9">
                                <input type="text" name="title" value={this.state.email?.Title} className="form-control" placeholder="Title" maxLength={73} onChange={(e) => this.onChange(e)} required />
                                {this.state.showErrorMessage?.IsTitleRequired && (this.state.email?.Title?.trim() === "" || this.state.email?.Title === undefined || this.state.email?.Title === null) && <div className="text-danger error-message">{SupportErrorMessages.TitleIsRequired}</div>}
                                {(this.state.showErrorMessage?.IsTitleSizeError !== undefined && this.state.showErrorMessage?.IsTitleSizeError) && <div className="text-danger error-message">{SupportErrorMessages.MaximumTitleMessageNote}</div>}
                            </div>
                        </div>
                        <div className="form-group row m-0 p-2">
                            <label className="col-sm-3 col-form-label ps-0 pe-1">Description <span className="text-danger">*</span></label>
                            <div className="col-sm-9">
                                <textarea required name="query" value={this.state.email?.Message} className="form-control query-container" placeholder="Enter your query here.." maxLength={500} onChange={(e) => this.onChange(e)} />
                                {this.state.showErrorMessage?.IsDescriptionRequired && (this.state.email?.Message?.trim() === "" || this.state.email?.Message === undefined || this.state.email?.Message === null) && <div className="text-danger error-message">{SupportErrorMessages.DescriptionIsRequired}</div>}
                                {(this.state.showErrorMessage?.IsDescriptionSizeError !== undefined && this.state.showErrorMessage?.IsDescriptionSizeError) && <div className="text-danger error-message">{SupportErrorMessages.MaximumDescriptionMessageNote}</div>}
                            </div>
                        </div>
                        <div className="form-group row m-0 p-2">
                            <label className="col-sm-3 col-form-label ps-0">Upload Image</label>
                            <div className="col-sm-9">
                                <input type="file" accept="image/*" name="attachment" className="form-control" onChange={(e) => this.onChange(e)} />
                                {this.state.showErrorMessage?.IsImageSizeError && (this.state.email?.Attachment === null || this.state.email?.Attachment === undefined) && <div className="text-danger error-message">{SupportErrorMessages.MaximumSizeNote}</div>}
                            </div>
                            {<div className="maximum-size-label"><span className="note-label">Note:</span>{SupportErrorMessages.MaximumSizeForImage}</div>}
                        </div>
                    </form>
                </div>
                <div className="support-footer d-flex justify-content-end p-2">
                    <div className="pe-2"><button className="btn cancel-btn" onClick={() => {
                        this.setState({ email: this.initialMail });
                        document.getElementsByName("attachment")[0].value = "";
                    }}>Cancel</button></div>
                    <div className="pe-3"><button className="btn send-btn" onClick={() => this.sendEmail()}>Send</button></div>
                </div>
                </div>
            </div>
        </>
        )
    }
}

export default SupportComponent;