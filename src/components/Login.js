import { useState } from "react";

export function Login(){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInputChange(event){
        const {value, type, name, checked} = event.target

        setData((data) => {
            return{
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    console.log(data)

    return(
        <div>
            <form>
                <input value={data.username} name="username" onChange={handleInputChange}></input>
                <input value={data.password} name="password" type="password" onChange={handleInputChange}></input>
                <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}></input>
            </form>
        </div>
    )
}