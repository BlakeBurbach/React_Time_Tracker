import React, { Component } from 'react';
import moment from 'moment';

class Date extends Component {
    constructor() {
        super();

        this.state = {
            date: ''
        }
    }

    handleDate = (event) => {
        this.setState({
            date: moment(event.target.value).format('YYYY-MM-DD')
        });
    }

    render() {
        return (
            <div className="entryPageInput">
                <label>Date</label>
                <input type="date" value={this.state.date} onChange={this.handleDate}/>
            </div>
        )
    }
}

export default Date;