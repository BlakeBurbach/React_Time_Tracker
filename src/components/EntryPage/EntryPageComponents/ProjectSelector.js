import React, { Component } from 'react';

class ProjectSelector extends Component {
    
    // since the state data for this component will be held in EntryPage's state - 
    // this function will fire any time a change is made and tell EntryPage's project_name
    // state value to change to what is coming in 
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        return (
            <div className="entryPageInput">
                <label>Project </label>
                <select name="project_name" value={this.props.project_name} onChange={this.handleInputChange}>
                    <option>Select One</option>
                    <option value="project_1">project 1</option>
                    <option value="project_2">project 2</option>
                    <option value="project_3">project 3</option>
                    <option value="project_4">project 4</option>
                </select>
            </div>
        )
    }
}

export default ProjectSelector;