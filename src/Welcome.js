import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render(){
        return (
            <div>
                <p>Hello, {this.props.name ?? 'Ema'}!</p>
                <Age age= {this.props.age} />
            </div>
        )
    }
}