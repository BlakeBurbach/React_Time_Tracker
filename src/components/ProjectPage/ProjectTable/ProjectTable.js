import React, { Component } from 'react';

class ProjectTable extends Component {
    constructor() {
        super();
    }
    render() {
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

                </tbody>
            </table>
        )
    }
}

export default ProjectTable;