import React, { Component } from 'react';

class ClientName extends Component {

    // since the state data for this component will be held in EntryPage's state - 
    // this function will fire any time a change is made and tell EntryPage's task_description
    // state value to change to what is coming in 
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        return (
            <div className="entryPageInput">
            <label>Client </label>
                <input type="text" name="project_client" value={this.props.project_client} onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default ClientName;