import React, { Component } from 'react';

class ProjectTable extends Component {
    constructor() {
        super();
    }
    render() {
        console.log('Projects Table', this.props.ProjectInfo);
        const ProjectTableRow = this.props.ProjectInfo.SetProjects.map((Project) => {
            return (<tr key={Project.project_id}>
                <td>{Project.client}</td>
                <td>{Project.project_description}</td>
                <td>
                    {Project.total_time} Hours
                </td>
                <td>{Project.total_pay}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>)
        });
        return (
            <table className="Table">
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Project</th>
                        <th>Total Hours</th>
                        <th>Total Pay</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {ProjectTableRow}
                </tbody>
            </table>
        )
    }
}

export default ProjectTable;