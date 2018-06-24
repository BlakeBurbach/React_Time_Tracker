import React, { Component } from 'react';

class StartTime extends Component {

    // since the state data for this component will be held in EntryPage's state - 
    // this function will fire any time a change is made and tell EntryPage's start_time
    // state value to change to what is coming in 
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        return (
            <div className="entryPageInput">
                <label>Start Time</label>
                <input type="time" name="start_time" value={this.props.start_time} onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default StartTime;