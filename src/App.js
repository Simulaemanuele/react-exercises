import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return(
        <div>
            <HelloWorld />
            <Welcome name={<strong>Emanuele</strong>} age= {28} /> 
            </div>
        )
    }
}

/*ho testato anche settando age a 11 ed effettivamente la condizione specificata nel componente Welcome, fa sicchè Age venga renderizzato solo
  se la props age sia maggiore di 18*/