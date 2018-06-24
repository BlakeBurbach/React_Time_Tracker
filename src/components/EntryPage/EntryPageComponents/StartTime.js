import React, { Component } from 'react';

class StartTime extends Component {

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