import React, { Component } from 'react';

class TaskDescription extends Component {

    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        return (
            <div className="entryPageInput">
            <label>Task </label>
                <input type="text" name="task_description" placeholder="description" value={this.props.task_description} onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default TaskDescription;