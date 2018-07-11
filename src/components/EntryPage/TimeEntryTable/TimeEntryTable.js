import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { USER_ACTIONS } from '../../redux/actions/userActions';


// const mapStateToProps = state => ({
//     user: state.user,
//     state
// });

class TimeEntryTable extends Component {
    render() {
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
                            Total Time
                        </th>
                        <th>
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Side Project
                        </td>
                        <td>
                            Making a Thing
                        </td>
                        <td>
                            7-7-2018
                        </td>
                        <td>
                            40 hours
                        </td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default TimeEntryTable;