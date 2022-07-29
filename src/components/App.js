import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends React.Component{
    state = {
        language: 'en',
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value,
        })
    }
    render(){
        return(
            
        <LanguageContext.Provider>
            <select value={this.state.language} onChange={this.handleLanguageChange}>
                <option value='en'>ENGLISH</option>
                <option value='it'>ITALIANO</option>
            </select>
            <DisplayLanguage />
            
        </LanguageContext.Provider>
        )
    }
}

