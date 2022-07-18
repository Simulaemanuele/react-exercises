import React from "react";
import  {CounterDisplay}  from "./CounterDisplay";



export class Counter extends React.Component {

    state = {
        count: this.props.initialValue ?? 0,
    }
    // constructor(props) 
    //     super(props)

        
        componentDidMount(){
        setInterval(() => {
            this.setState(() => {
                return { count: this.state.count + (this.props.incrementAmount ?? 1) };
            })
        }, (this.props.incrementInterval ?? 1000))
    }
    

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count} />
            </div>
        )

    }
}

