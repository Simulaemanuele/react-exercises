import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <p>Hello, {this.props.name}!</p>

                {/* {this.props.age > 18 && this.props.age < 65 && this.props.name ===  'John'  && <Age age={this.props.age} />  } */}
                <Age age={this.props.age} />
            </div>
        )
    }
}

/*Ho commentato il codice per evitare le restrizioni riguardo al rendering del Componente Age*/

Welcome.defaultProps = {
    name: 'Tizio'
}