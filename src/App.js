import React from "react";
import { GithubUserList } from "./components/GithubUserList";







export class App extends React.Component{
    
    render(){
        return(
            <div className="mainContainer">
                <GithubUserList />
            </div>
        )
    }
}

