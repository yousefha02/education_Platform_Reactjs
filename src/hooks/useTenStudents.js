import {useQuery} from 'react-query'

async function getStudents(token)
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/student/getLastTen`,{
        headers:{
            "Authorization":token
        }
    })
    return response.json()
}

export const useTenStudents = (token)=>
{
    return useQuery('get-ten-students',()=>getStudents(token))
}