import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
    
    const {users, error, isLoading} = useGithubUser(username);

    
    return(
        <div>
            
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>An error has occured, please insert valid username!</h1>}
            {users && <h1>{users.name || users.login}</h1>}
        </div>
    )


}