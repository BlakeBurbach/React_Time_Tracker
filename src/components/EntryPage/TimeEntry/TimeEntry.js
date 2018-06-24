import React, { Component } from 'react';

class TimeEntry extends Component {

    render() {
        return (
            <tr>
                <td>
                    {this.props.TimeEntry.project_name}
                </td>
                <td>
                    {this.props.TimeEntry.task_description}
                </td>
                <td>
                    {this.props.TimeEntry.date}
                </td>
                <td>
                    {this.props.TimeEntry.start_time}
                </td>
                <td>
                    {this.props.TimeEntry.end_time}
                </td>
            </tr>
        )
    }
}

export default TimeEntry;