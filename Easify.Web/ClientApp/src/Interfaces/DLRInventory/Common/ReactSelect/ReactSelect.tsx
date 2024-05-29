import * as React from 'react';
import Select, { components } from 'react-select';
import { FieldTypes } from '../../../../Assets/Enums';
import { ISelectOption } from '../ISelectOption';
import './ReactSelect.scss';

interface IReactSelectProps {
    isRead?: boolean;
    textValue?: string;
    selectedOption: string | number;
    options: Array<ISelectOption>;
    handleChange: (event: any, field: string, type: string, formattedValue?: any) => void;
    disabled: boolean;
    placeHolder?: string;
    fieldName: string;
    className?: string;
    mainClassName?: string;
}

interface IReactSelectState {
}

const DropdownIndicator = (
  props: any
) => {
  return (
    <components.DropdownIndicator {...props}>
      <i className="ms-Icon ms-Icon--CaretSolidDown"></i>                                                        
    </components.DropdownIndicator>
  );
};

const customStyles = {
  control: base => ({
    ...base,
    height: 32,
    minHeight: 32
  })
};

class ReactSelectComponent extends React.Component<IReactSelectProps, IReactSelectState>
{
    constructor(props: IReactSelectProps) {
        super(props);
        this.getSelectedOption = this.getSelectedOption.bind(this);
    }

    getSelectedOption() {
        if (this.props && this.props.selectedOption != undefined) {
            var selectedOption: Array<ISelectOption> = this.props.options.filter((option) => {
                return option.value == this.props.selectedOption
            });
            if (selectedOption && selectedOption.length > 0) {
                return selectedOption[0];
            }
        }
        return null;
    }

    render(): JSX.Element {
        return (
            <React.Fragment>
                {
                    this.props.isRead ?
                        <div className="pt-2">{this.props.selectedOption}</div> :
                        <div className={`custom-react-select ${this.props.mainClassName}`}>
                            <Select
                                placeholder={this.props.placeHolder}
                                value={this.getSelectedOption()}
                                menuPlacement="auto"
                                onChange={(e) => {
                                    this.props.handleChange(
                                        ( e ),
                                        this.props.fieldName,
                                        FieldTypes.Dropdown,
                                        ( e )
                                    )
                                }}
                                options={this.props.options}
                                className={this.props.className}
                                minMenuHeight={200}
                            />
                        </div>
                 }
            </React.Fragment>
        );
    }
}
export default ReactSelectComponent
