import React, { Component } from 'react';

class StartTime extends Component {
    render() {
        return (
            <div className="entryPageInput">
                <label>Start Time</label>
                <input type="time" />
            </div>
        )
    }
}

export default StartTime;