import React from "react";
import { Login } from "./components/Login";

export class App extends React.Component{
    
    render(){
        return(
            <div className="mainContainer">
                <h1>Form</h1>
                <Login />
            </div>
        )
    }
}

