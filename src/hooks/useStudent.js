import {useQuery} from 'react-query'

async function getStudent(id)
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/student/get/${id}`)
    return response.json()
}

export const useStudent = (id)=>
{
    return useQuery('get-student',()=>getStudent(id))
}