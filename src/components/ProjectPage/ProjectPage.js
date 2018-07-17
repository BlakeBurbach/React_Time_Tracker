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
});

class ProjectPage extends Component {
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
        <h1>Current Projects</h1>
        <div>
          <ClientName />
          <ProjectDescription />
          <PayPerHour />
          <SubmitProjectButton />
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectPage);