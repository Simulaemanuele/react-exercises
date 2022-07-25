import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Please Login</h2>
                </div>
                <div>
                    <input
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />

                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />

                    <input
                        name="remember"
                        type="checkbox"
                        onChange={this.handleInputChange} />
                </div>
            </div>
        )
    }
}