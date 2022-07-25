import React from "react";

export class ClickButton extends React.Component{
    state = {
        count: this.props.initialValue,
    }

    handleCounterIncrement = (event) => {
        console.log(event);

        this.setState((state) => {
            return {
                count: state.count + this.props.incrementBy
            }
        })
    }

    render(){
        return (
            <div>
                <h3>Count: {this.state.count}</h3>

                <button onClick={this.handleCounterIncrement}>Click Me!!</button>
            </div>
        )
    }
}

ClickButton.defaultProps = {
    initialValue: 0,
    incrementBy: 1
}