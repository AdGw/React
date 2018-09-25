export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile(){
    return(dispatch)=>{
        let header = new Headers({
            "Content-Type":"application/json",
            //Your's github token value
            "Authorization": "token" + ""
          });
        return fetch('https://api.github.com/users/adgw',{
            method: 'GET',
            headers: header
        })
        .then(response => response.json())
        .then(json =>{
            console.log(json)
            dispatch(LoadProfile(json))
        })
        .catch(error=>{
            console.log(error)
        });
    }
}
export function LoadProfile(results){
    return{
        type: PROFILE_EDITED,
        payload: results
    }
}
