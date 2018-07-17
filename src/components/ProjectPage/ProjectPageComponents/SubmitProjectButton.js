import React, { Component } from 'react';

class SubmitProjectButton extends Component {

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

export default SubmitProjectButton;