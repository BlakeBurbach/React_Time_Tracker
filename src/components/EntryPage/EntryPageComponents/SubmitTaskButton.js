import React, { Component } from 'react';

class SubmitTaskButton extends Component {

    render() {
        return (
            <div className="entryPageInput">
                <button onClick={this.props.submit} >
                    Submit
                </button>
            </div>
        )
    }
}

export default SubmitTaskButton;