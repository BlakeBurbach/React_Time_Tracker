import React, { Component } from 'react';

class PayPerHour extends Component {

    // since the state data for this component will be held in EntryPage's state - 
    // this function will fire any time a change is made and tell EntryPage's task_description
    // state value to change to what is coming in 
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        return (
            <div className="entryPageInput">
            <label>$/hr </label>
                <input type="text" name="pay_per_hour" value={this.props.pay_per_hour} onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default PayPerHour;