import React from "react";
import { CarDetails } from "./components/CarDetails";



export class App extends React.Component{
    
    render(){
        return(
            <div className="mainContainer">
                <CarDetails initialData={{defaultModel: "Nissan", defaultYear: 2020, defaultColor: "black"}}/>
            </div>
        )
    }
}

