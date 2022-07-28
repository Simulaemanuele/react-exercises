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

export class App extends React.Component{
    render(){
        return(
        <Container title="my awesome ugly app">
            <HelloWorld />
            <InteractiveWelcome />
            <Login />
            <UncontrolledLogin />
            {/* <Welcome name= 'John' age= {10} />  */}
            <Counter />
            <ClickButton /> 
            <ClickTracker /> 
            <TodoList />
        </Container>
        )
    }
}

/*ho testato anche settando age a 11 ed effettivamente la condizione specificata nel componente Welcome, fa sicchè Age venga renderizzato solo
  se la props age sia maggiore di 18*/

  /*Ho dovuto togliere <strong></strong> altrimenti non riusciva a renderizzare il componente invece come stringa non ci sono problemi*/ 

  /*Ho modificato la props age per testare il componente Age quindi vado a modificare il codice in Welcome per evitare il non render del componente*/ 