import React, { Component } from 'react';

class ProjectOption extends Component {

    render() {
        return (
            <option value={this.props.project_id}>{this.props.client}</option>
        )
    }
}

export default ProjectOption;