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
import TimeEntryTable from './TimeEntryTable/TimeEntryTable';

const mapStateToProps = state => ({
    user: state.user,
    state
});

const initialState = {
    task_description: '',
    project_id: '',
    date: '',
    start_time: '',
    end_time: ''
};


class EntryPage extends Component {
    constructor() {
        super();

        this.state = initialState;
    }

    // when component mounts, get all of the user info to know whether to allow access or not
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ type: 'GET_TASK_ENTRIES' });
        this.props.dispatch({ type: 'GET_PROJECTS' });
    }

    // if there is not a user that is logged in and now waiting for a username, push
    // to the login page so no one can access the page without being logged in
    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    };

    // TODO: send state to database on submission
    // after submission and state sent to server, 
    // clear the inputs by resetting state
    submit = (event) => {
        console.log(this.state);
        this.props.dispatch({ type: 'POST_NEW_TASK_ENTRY', payload: this.state });
        this.setState(initialState); // end resetState
    }; // end submit

    // handle the change for any input and set it's corresponding
    // state value to the change accordingly
    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }); // end setState
    }; // end handleInputChange


    render() {
        let ProjectInfo = this.props.state.ProjectsReducer;
        let TaskEntries = this.props.state.TaskEntryTableReducer;
        return (
            <div>
                <Nav />
                <h1>Time Entries</h1>
                <div>
                    <TaskDescription handleInputChange={this.handleInputChange} task_description={this.state.task_description} />
                    <ProjectSelector handleInputChange={this.handleInputChange} project_id={this.state.project_id} ProjectInfo={ProjectInfo} />
                    <Date handleInputChange={this.handleInputChange} date={this.state.date} />
                    <StartTime handleInputChange={this.handleInputChange} start_time={this.state.start_time} />
                    <EndTime handleInputChange={this.handleInputChange} end_time={this.state.end_time} />
                    <SubmitTaskButton submit={this.submit} />
                    <br />
                    <TimeEntryTable TaskEntries={TaskEntries}/>
                </div>
            </div>
        );
    } // end render
} // end EntryPage component

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EntryPage);