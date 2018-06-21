import React, { Component } from 'react';

class StartTime extends Component {
    constructor() {
        super();

        this.state = {
            start_time: ''
        }
    }

    handleStartTime = (event) => {
        this.setState({
            start_time: event.target.value
        });
    }

    render() {
        return (
            <div className="entryPageInput">
                <label>Start Time</label>
                <input type="time" value={this.state.start_time} onChange={this.handleStartTime} />
            </div>
        )
    }
}

export default StartTime;