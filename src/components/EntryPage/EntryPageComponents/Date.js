import React, { Component } from 'react';


class Date extends Component {

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