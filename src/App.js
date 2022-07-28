import React from "react";
import { HelloWorld } from "./HelloWorld";
// import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickButton } from "./ClickButton";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends React.Component{

    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value,
        })
    }


    render(){
        return(
        <LanguageContext.Provider value={this.state.language}>
            
            <div>
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value='en'>ENGLISH</option>
                    <option value='it'>ITALIANO</option>
                </select>
            </div>
            <DisplayLanguage />
            <Container title="my awesome ugly app">
                <HelloWorld />
                <InteractiveWelcome />
                <Login />
                <UncontrolledLogin />
                {/* <Welcome name= 'John' age= {10} />  */}
                <Counter />
                <ClickButton /> 
                <ClickTracker /> 
                <TodoList render={(names) => {
                    return(
                        <div className="container__todoListStyle">
                            <ul className="container__todoListStyle__ul">
                                {names.map((name, index) => <li key={name + index}>{name}
                                <button onClick={() => {names.splice(index, 1);
                                this.setState({ 
                                        names: names });
                                        }}>Remove</button></li>)}
                            </ul>
                        </div>
                    )
                }}/>
            </Container>
        </LanguageContext.Provider>
        )
    }
}

/*ho testato anche settando age a 11 ed effettivamente la condizione specificata nel componente Welcome, fa sicchè Age venga renderizzato solo
  se la props age sia maggiore di 18*/

  /*Ho dovuto togliere <strong></strong> altrimenti non riusciva a renderizzare il componente invece come stringa non ci sono problemi*/ 

  /*Ho modificato la props age per testare il componente Age quindi vado a modificare il codice in Welcome per evitare il non render del componente*/ 