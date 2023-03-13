import {useQuery} from 'react-query'

async function getWaitingTeachers(token)
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/waitingTeachers`,{
        headers:{
            "Authorization":token
        }
    })
    return response.json()
}

export const useWaitingTeachers = (token)=>
{
    return useQuery('get-waiting-teachers',()=>getWaitingTeachers(token))
}