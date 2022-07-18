import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export class App extends React.Component{
    render(){
        return(
        <div>
            <HelloWorld />
            <Welcome name= 'John' age= {10} /> 
            <Counter initialValue= {10} incrementAmount= {1} incrementInterval= {500} />
            </div>
        )
    }
}

/*ho testato anche settando age a 11 ed effettivamente la condizione specificata nel componente Welcome, fa sicchè Age venga renderizzato solo
  se la props age sia maggiore di 18*/

  /*Ho dovuto togliere <strong></strong> altrimenti non riusciva a renderizzare il componente invece come stringa non ci sono problemi*/ 

  /*Ho modificato la props age per testare il componente Age quindi vado a modificare il codice in Welcome per evitare il non render del componente*/ 