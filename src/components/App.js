import React from "react";
import { ClickCounter } from "./ClickCounter";



export class App extends React.Component{
    
    render(){
        return(
            <div className="mainContainer">
                <ClickCounter />
            </div>
        )
    }
}

