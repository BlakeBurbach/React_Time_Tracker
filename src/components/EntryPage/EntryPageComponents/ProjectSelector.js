import React, { Component } from 'react';

class ProjectSelector extends Component {
    constructor(){
        super();

        this.state = {
            project_name: ''
        }
    }

    handleProjectSelect = (event) => {
        this.setState({
            project_name: event.target.value
        });
    }

    render() {
        return (
            <div className="entryPageInput">
                <label>Project </label>
                <select value={this.state.project_name} onChange={this.handleProjectSelect}>
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