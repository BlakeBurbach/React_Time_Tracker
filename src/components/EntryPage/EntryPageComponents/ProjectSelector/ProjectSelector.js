import React, { Component } from 'react';
// import ProjectOption from './ProjectOption';

class ProjectSelector extends Component {

    // since the state data for this component will be held in EntryPage's state - 
    // this function will fire any time a change is made and tell EntryPage's project_name
    // state value to change to what is coming in 
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        console.log('ProjectInfo', this.props.ProjectInfo);
        let ProjectOptionsArray = this.props.ProjectInfo.SetProjects.map((ProjectOption) => {
            return (<option key={ProjectOption.project_id} value={ProjectOption.project_id}>{ProjectOption.client}</option>)
        });
        // console.log('ProjectOptions', ProjectOptionsArray);
        return (
            <div className="entryPageInput">
                <label>Project </label>
                <select name="project_id" value={this.props.project_id} onChange={this.handleInputChange}>
                    <option>Select One</option>
                    {ProjectOptionsArray}
                </select>
            </div>
        )
    }
}

export default ProjectSelector;