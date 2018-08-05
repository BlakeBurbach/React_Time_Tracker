import React, { Component } from 'react';
import moment from 'moment';

class TimeEntryTable extends Component {
    render() {

        const TimeEntryTableRow = this.props.TaskEntries.SetTaskEntryTable.map((TimeEntry) => {
            return (<tr key={TimeEntry.id}>
                <td>{TimeEntry.project_client}</td>
                <td>{TimeEntry.task_description}</td>
                <td>{moment(TimeEntry.date).format('MMMM Do YYYY')}</td>
                <td>
                    {TimeEntry.total_hours.hours} Hour,
                    {TimeEntry.total_hours.minutes} Minutes
                </td>
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
                        <th>
                            Project Name
                        </th>
                        <th>
                            Task Description
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Total Hours
                        </th>
                        <th>
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {TimeEntryTableRow}
                </tbody>
            </table>
        )
    }
}

export default TimeEntryTable;