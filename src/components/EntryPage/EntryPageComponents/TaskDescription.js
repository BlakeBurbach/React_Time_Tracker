import React, { Component } from 'react';

class TaskDescription extends Component {
    render() {
        return (
            <div className="entryPageInput">
            <label>Task </label>
                <input type="text" placeholder="description" />
            </div>
        )
    }
}

export default TaskDescription;