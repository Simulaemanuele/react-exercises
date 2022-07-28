import React from "react";

export class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container__general-title">
                    {this.props.title}
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}