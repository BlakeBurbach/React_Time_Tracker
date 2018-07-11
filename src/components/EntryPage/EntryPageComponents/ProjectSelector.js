import React, { Component } from 'react';

class ProjectSelector extends Component {

    // since the state data for this component will be held in EntryPage's state - 
    // this function will fire any time a change is made and tell EntryPage's project_name
    // state value to change to what is coming in 
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        console.log('ProjectInfo', this.props.ProjectInfo);
        // let ProjectOptions = this.props.ProjectInfo.map((ProjectOption) => {
        //     return (<ProjectOption key={ProjectOption.project_id} />)
        // });
        return (
            <div className="entryPageInput">
                <label>Project </label>
                <select name="project_id" value={this.props.project_id} onChange={this.handleInputChange}>
                    <option>Select One</option>
                    {/* {ProjectOptions} */}
                </select>
            </div>
        )
    }
}

export default ProjectSelector;