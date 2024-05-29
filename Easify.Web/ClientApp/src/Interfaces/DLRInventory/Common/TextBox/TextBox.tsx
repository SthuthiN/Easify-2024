import * as React from "react";
import { FieldTypes } from "../../../../Assets/Enums";

interface ITextBoxComponentProps {
    id: string;
    isRead?: any;
    className?: string;
    value?: string;
    fieldName: string;
    isRequired?: boolean;
    placeHolder?: string;
    disabled?: boolean;
    onChange: any;
    onPaste?: any;
    onBlur?: any;
    maxLength?: number;
}

interface ITextBoxComponentState {
    value: string;
}

class TextBoxComponent extends React.Component<ITextBoxComponentProps, ITextBoxComponentState> {
    constructor(props: ITextBoxComponentProps) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    render() {
        return (
            <React.Fragment>
                {this.props.isRead ?
                    <div className="pt-2">{this.props.value}</div>
                    :
                    <input placeholder={this.props.placeHolder} disabled={this.props.disabled as boolean} id={this.props.id} className={`${this.props.className}`} value={this.props.value}
                        onChange={e => this.props.onChange(e, this.props.fieldName, FieldTypes.TextBox)} onPaste={this.props.onPaste} autoComplete="off"
                        onBlur={e => this.props.onBlur(e, this.props.fieldName, FieldTypes.TextBox)} maxLength={this.props.maxLength}
                    />
                }
            </React.Fragment>
        );
    }
}

export default TextBoxComponent