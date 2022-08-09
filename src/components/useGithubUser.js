import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json());

export function useGithubUser(username){
    const {data, error} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher);

    
    return{ users: data, error, isloading: !data && !error, }
}