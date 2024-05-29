import * as React from "react";
import "./SearchComponent.scss";

export interface IsearchProps {
    getSearchItem: any;
}
export interface IsearchState {

}
export class SearchComponent extends React.Component<IsearchProps, IsearchState>{
    constructor(props) {
        super(props);
        this.state={ }
    }

    getSearchValue(e) {
        this.props.getSearchItem(e.target.value)
    }

    render() {
        return (
            <div>
                <div className="search-item">
                    <div className="search-container">
                        <input className="search expandright"  id="searchright" type="search" name="q" placeholder="Search" onChange={(e)=>this.getSearchValue(e) } />
                            <label className="button searchbutton" htmlFor="searchright"><span className="mglass">&#9906;</span></label>
                    </div>

                </div>
            </div>
        )
    }
     
}