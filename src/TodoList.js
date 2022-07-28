import React from "react";

export class TodoList extends React.Component {
    state = {
        names: ['Emanuele', 'Giorgio', 'Pietro', 'Alessio', 'Gianluigi', 'Andrea'],
        valueInput: '',
    }

    handlerInputChange = (event) => {
        this.setState({
            valueInput: event.target.value
        })
    }

    handlerAddName = () => {
        this.setState({
            names: [...this.state.names, this.state.valueInput],
            valueInput: ''
        })
    }

    handlerResetNames = () => {
        this.setState({
            names: []
        })
    }

    // handlerRemoveAddedNames = () => {
    //     this.state.splice(index, 1);

    //     this.setState({
    //         names: this.state.names
    //     })
    // }
    render() {
        return (
            <div>
                
                {this.props.render(this.state.names)}

                <input type="text"
                    name="username"
                    placeholder="Insert name to add..."
                    onChange={this.handlerInputChange}
                    value={this.state.valueInput}
                />

                <button onClick={this.handlerAddName} disabled={!(this.state.valueInput)}>Add name</button>
                <button onClick={this.handlerResetNames}>Reset</button>
            </div>
        )
    }
}