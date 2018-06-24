import React, { Component } from 'react';


class Date extends Component {

    // since the state data for this component will be held in EntryPage's state - 
    // this function will fire any time a change is made and tell EntryPage's date
    // state value to change to what is coming in 
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        return (
            <div className="entryPageInput">
                <label>Date</label>
                <input type="date" name="date" value={this.props.date} onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default Date;