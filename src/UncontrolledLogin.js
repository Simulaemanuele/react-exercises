import React, {createRef} from "react";

export class UncontrolledLogin extends React.Component{
_formRef=createRef();
_autofocusUserRef=createRef();

componentDidMount(){
    this._autofocusUserRef.current.focus();
}

handleFormSubmit = (event) => {
    event.preventDefault();

    const username= event.target.elements.username.value;
    const password= event.target.elements.password.value;
    const remember= event.target.elements.remember.checked;

    console.log({
        username,
        password,
        remember
    })

}

render(){
    return(
        <div>
            <h2>Uncontrolled Type Login</h2>

            <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                <input ref={this._autofocusUserRef} name="username" placeholder="Username@example.com"/>
                <input name="password" type="password" placeholder="Password123"/>
                <input name="remember" type="checkbox"/>
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    )
}
}