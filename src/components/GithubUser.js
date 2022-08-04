import { useEffect, useState } from "react";

export function GithubUser({ username }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);



    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.status !== 200) {
                    setError(new Error('User not found'))
                }

                return response.json();
            })
            .then(json => {
                console.log(json);
                setData(json);
            })
            .catch(error => {
                setError(error);
            })
            
    }, [username]);

    // async function fetchGithubUser(){
    //     setError(null)
    //     setLoading(true)

    //     try{
    //         const response = await fetch(`https://api.github.com/users/${username}`)
    //         const json = await response.json()

    //         setData(json)
    //     }catch{
    //         setError(error)
    //         setData(null)
    //     } finally{
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     fetchGithubUser(username)
    // }, [username])

    return (
        <div>
            {/* {loading && <h1>Loading...</h1>} */}
            {error && <h1>User not found</h1>}
            {data && <h1>{data.name || data.login}</h1>}
        </div>
    )


}