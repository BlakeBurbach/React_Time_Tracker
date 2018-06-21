import React, { Component } from 'react';

class EndTime extends Component {
    constructor() {
        super();

        this.state = {
            end_time: ''
        }
    }

    handleEndTime = (event) => {
        this.setState({
            end_time: event.target.value
        });
    }

    render() {
        return (
            <div className="entryPageInput">
                <label>End Time</label>
                <input type="time" value={this.state.end_time} onChange={this.handleEndTime}/>
            </div>
        )
    }
}

export default EndTime;