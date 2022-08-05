import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){

    const {data, error, loading, onFetchUser} = useGithubUser(username);

    function handleGetUserData(){
        onFetchUser(username)
    }
    return(
        <div>
            <button onClick={handleGetUserData}>Load user data</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>An error has occured, please insert valid username!</h1>}
            {data && <h1>{data.name || data.login}</h1>}
        </div>
    )
}