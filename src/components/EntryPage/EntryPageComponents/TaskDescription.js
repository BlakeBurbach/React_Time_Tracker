import React, { Component } from 'react';

class TaskDescription extends Component {
    constructor(){
        super();

        this.state = {
            task_description: ''
        }
    }

    handleTaskInput = (event) => {
        this.setState({
            task_description: event.target.value
        });
    }

    render() {
        return (
            <div className="entryPageInput">
            <label>Task </label>
                <input type="text" placeholder="description" value={this.state.task_description} onChange={this.handleTaskInput}/>
            </div>
        )
    }
}

export default TaskDescription;