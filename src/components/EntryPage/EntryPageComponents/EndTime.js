import React, { Component } from 'react';

class EndTime extends Component {

    // since the state data for this component will be held in EntryPage's state - 
    // this function will fire any time a change is made and tell EntryPage's end_time
    // state value to change to what is coming in 
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        return (
            <div className="entryPageInput">
                <label>End Time</label>
                <input type="time" name="end_time" value={this.props.end_time} onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default EndTime;