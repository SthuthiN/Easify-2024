import { title } from 'process';
import  React, {Component} from 'react';
import { Bookmark, BookmarkFill } from 'react-bootstrap-icons';
import Select, { components } from 'react-select';
import './BookmarkDropdown.scss';

interface IBookmarkDropdownProps {
    selectedOption: string | number;
    options: Array<{ label: string, value: string, title?: string }>;
    handleChange: (event: any, field: string, formattedValue?: any)=>any;
    placeHolder?: string;
    fieldName: string;
    isBookmarkSaved: boolean;
    saveBookmark: any;
    deleteBookmark: any;
    setTitle: any;
    hideDropdown: any;
}

interface IBookmarkDropdownState {
    showDropdown: boolean;
    input: string;
}

const DropdownIndicator = (
    props: any
) => {
    return (
        <components.DropdownIndicator {...props}>
            <>
                {!props.isBookmarkSaved && < div> < Bookmark className="bookmark cursor-pointer" onClick={props.saveBookmark} /></div>}
                {props.isBookmarkSaved && < div> < BookmarkFill className="saved-bookmark cursor-pointer" onClick={props.deleteBookmark} /></div>}

            </>
        </components.DropdownIndicator>
    );
};


class BookmarkDropdownComponent extends Component<IBookmarkDropdownProps, IBookmarkDropdownState>
{
    wrapperRef:any;
    constructor(props: IBookmarkDropdownProps) {
        super(props);

        this.state = {
            showDropdown: true,
            input:""
        }
        this.getSelectedOption = this.getSelectedOption.bind(this);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    dropdownStyles = {
        control: (base, state) => ({
            ...base,
            '&:hover': { borderColor: 'none' },
            border: '1px solid lightgray',
            boxShadow: 'none',
            
        })
    };
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current!==null && !this.wrapperRef.current.contains(event.target)) {
            this.props.hideDropdown(true);
            this.setState({ showDropdown: false })
        }
    }

    getSelectedOption() {
        if (this.props && this.props.selectedOption !== undefined) {
            var selectedOption: Array<{ label: string, value: string }> = this.props.options?.filter((option) => {
                return option.value === this.props.selectedOption
            });
            if (selectedOption && selectedOption.length > 0) {
                return selectedOption[0];
            }
        }
        return null;
    }

    setTitle = (event: any, { action }) => {
        if (action !== 'menu-close') {
            this.props.setTitle(event)
        }
    }
    render(): JSX.Element {
        return (
            <React.Fragment>
                {
                    this.state.showDropdown && < div ref={this.wrapperRef}>
                        <div className={`bookmark-select pt-2`}>
                            <Select
                                styles={this.dropdownStyles}
                                onInputChange={this.setTitle}
                                onChange={(e) => this.props.handleChange(
                                (e),
                                this.props.fieldName,
                                (e)
                                )}                                    
                                placeholder={this.props.placeHolder}
                                value={this.getSelectedOption()}
                                menuPlacement="auto"
                                options={this.props.options}
                                minMenuHeight={200}
                                menuIsOpen={true}
                                components={{
                                    DropdownIndicator: (dropdownProps) => (
                                        <DropdownIndicator {...dropdownProps} isBookmarkSaved={this.props.isBookmarkSaved} saveBookmark={this.props.saveBookmark} deleteBookmark={this.props.deleteBookmark} />
                                    )
                                }}
                            />
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default BookmarkDropdownComponent

