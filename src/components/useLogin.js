import { useState } from "react"

export function useLogin() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })


    function handleChange(event) {
        const { name, type, value, checked } = event.target;

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    return {
        data: data,
        onInput: handleChange
    }
}