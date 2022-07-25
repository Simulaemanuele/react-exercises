import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    onLogin = () => {
        this.setState({
            username: this.state.username,
            password: this.state.password
        })
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

                    <button
                     type="submit"
                      onClick={this.onLogin}
                      disabled={!(this.state.username && this.state.password)}>Login</button>
                </div>



            </div>
        )
    }
}