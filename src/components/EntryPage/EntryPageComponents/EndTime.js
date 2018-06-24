import React, { Component } from 'react';

class EndTime extends Component {

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