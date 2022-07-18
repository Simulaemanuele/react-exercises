import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: this.props.initialValue ?? 0,
        }

        setInterval(() => {
            this.setState(() => {
                return { count: this.state.count + this.props.incrementAmount ?? 1 };
            })
        }, this.props.incrementInterval ?? 1000)
    }

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count} />
            </div>
        )

    }
}