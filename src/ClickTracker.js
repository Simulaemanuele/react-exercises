import React from "react";

export class ClickTracker extends React.Component {
    state = {
        button: 'No buttons were pressed'
    }

    handleButtonsTracker = (event) => {
        this.setState({
            button: event.target.name,
        })
    }

    render() {
        return (
            <div>
                <h1>Click Tracker: last button clicked {this.state.button} </h1>
                <div>
                    <button name='Button1' onClick={this.handleButtonsTracker}>Button 1</button>
                    <button name='Button2' onClick={this.handleButtonsTracker}>Button 2</button>
                    <button name='Button3' onClick={this.handleButtonsTracker}>button 3</button>
                </div>
            </div>
        )
    }
}