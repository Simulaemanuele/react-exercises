import React from "react";
import { Counter } from "./components/Counter";






export class App extends React.Component{
    
    render(){
        return(
            <div className="mainContainer">
                <Counter />
            </div>
        )
    }
}

