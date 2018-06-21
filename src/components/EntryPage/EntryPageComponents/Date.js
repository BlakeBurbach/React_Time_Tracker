import React, { Component } from 'react';


class Date extends Component {
    constructor() {
        super();

        this.state = {
            date: ''
        }
    }

    handleDate = (event) => {
        this.setState({
            date: event.target.value
        });
    }

    render() {
        return (
            <div className="entryPageInput">
                <label>Date</label>
                <input type="date" value={this.state.date} onChange={this.handleDate} />
            </div>
        )
    }
}

export default Date;