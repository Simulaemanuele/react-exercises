import React from "react";
import { GithubUser } from "./components/GithubUser";


export class App extends React.Component{
    
    render(){
        return(
            <div className="mainContainer">
                <GithubUser username="Simulaemanuele" />
            </div>
        )
    }
}

