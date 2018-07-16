import React, { Component } from 'react';
// import TimeEntry from './TimeEntry';
import moment from 'moment';

// import { connect } from 'react-redux';

// import { USER_ACTIONS } from '../../redux/actions/userActions';


// const mapStateToProps = state => ({
//     user: state.user,
//     state
// });

class TimeEntryTable extends Component {
    render() {
        console.log('TimeEntryTable this.props.TaskEntries', this.props.TaskEntries.SetTaskEntryTable);
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
            <table className="TaskEntryTable">
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