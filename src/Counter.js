import React from "react";

export class Counter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }

        setInterval(() => {
            this.setState(() => {
                return {count: this.state.count +1};
            })
        }, 1000)
    }

    render(){
        return <h1>Count: {this.state.count}</h1>
        
    }
}