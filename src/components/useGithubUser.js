import { useState } from "react"

export function useGithubUser(){
    const[data, setData] = useState(null)
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(null)

    async function fetchGithubUser(username){
        setLoading(null)
        setError(null)

        try{
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json();

            if(response.status !== 200){
                setError(new Error('Server response different by 200'))
            }

            setData(json);
        } catch{
            setError(error);
            setData(null);
        } finally{
            setLoading(false)
        }
    }

    return{ data, error, loading, onFetchUser: fetchGithubUser}
}