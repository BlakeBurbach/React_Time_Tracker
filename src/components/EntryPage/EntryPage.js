import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import TaskDescription from './EntryPageComponents/TaskDescription';
import ProjectSelector from './EntryPageComponents/ProjectSelector';
import Date from './EntryPageComponents/Date';
import StartTime from './EntryPageComponents/StartTime';
import EndTime from './EntryPageComponents/EndTime';

const mapStateToProps = state => ({
    user: state.user,
});

class EntryPage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

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
                <TaskDescription />
                <ProjectSelector />
                <Date />
                <StartTime />
                <EndTime />
      </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EntryPage);