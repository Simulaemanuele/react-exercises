import { useLogin } from "./useLogin"


export function Login(){
    const {data, onInput} = useLogin();

    console.log(data);
    return(
        <form>
            <input name="username" value={data.username} onChange={onInput}/>
            <input name="password" type="password" value={data.password} onChange={onInput} />
            <input name="remember" type="checkbox" checked={data.remember} onChange={onInput} />
        </form>
    )
}