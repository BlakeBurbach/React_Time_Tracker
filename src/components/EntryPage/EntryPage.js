import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import TaskDescription from './EntryPageComponents/TaskDescription';
import ProjectSelector from './EntryPageComponents/ProjectSelector';
import Date from './EntryPageComponents/Date';
import StartTime from './EntryPageComponents/StartTime';
import EndTime from './EntryPageComponents/EndTime';
import SubmitTaskButton from './EntryPageComponents/SubmitTaskButton';

const mapStateToProps = state => ({
    user: state.user,
});

class EntryPage extends Component {
    // when component mounts, get all of the user info to know whether to allow access or not
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    // if there is not a user that is logged in and now waiting for a username, push
    // to the login page so no one can access the page without being logged in
    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    render() {
        return (
            <div>
                <Nav />
                <h1>Time Entries</h1>
                <div>
                    <TaskDescription />
                    <ProjectSelector />
                    <Date />
                    <StartTime />
                    <EndTime />
                    <SubmitTaskButton />
                </div>
            </div>
        );
    } // end render
} // end EntryPage component

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EntryPage);