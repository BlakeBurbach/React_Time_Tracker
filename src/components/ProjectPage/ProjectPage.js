import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import ClientName from './ProjectPageComponents/ClientName';
import ProjectDescription from './ProjectPageComponents/ProjectDescription';
import PayPerHour from './ProjectPageComponents/PayPerHour';
import SubmitProjectButton from './ProjectPageComponents/SubmitProjectButton';


const mapStateToProps = state => ({
  user: state.user,
  state
});

const InitialState = {
  project_client: '',
  project_description: '',
  pay_per_hour: '',
};

class ProjectPage extends Component {
  constructor() {
    super();

    this.state = InitialState;
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

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

  submit = (event) => {
    console.log(this.state);
    // this.props.dispatch({ type: 'POST_NEW_TASK_ENTRY', payload: this.state });
    this.setState(InitialState); // end resetState
  }; // end submit

  render() {
    return (
      <div>
        <Nav />
        <h1>Current Projects</h1>
        <div>
          <ClientName project_client={this.state.project_client} handleInputChange={this.handleInputChange} />
          <ProjectDescription project_description={this.state.project_description} handleInputChange={this.handleInputChange} />
          <PayPerHour pay_per_hour={this.state.pay_per_hour} handleInputChange={this.handleInputChange} />
          <SubmitProjectButton submit={this.submit}/>
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectPage);