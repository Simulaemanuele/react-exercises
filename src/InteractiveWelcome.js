import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state={
        name: '',
    }
    handleInput = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    render(){
        return(
            <div>
                <span>Insert your name below!</span>
                <br/>
                <input name="name" value={this.state.name} onChange={this.handleInput}/>
                <Welcome name={this.state.name}/>
            </div>
        )
    }
}