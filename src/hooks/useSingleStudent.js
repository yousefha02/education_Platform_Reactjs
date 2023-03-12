import {useQuery} from 'react-query'

async function getSingleStudent(id)
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/student/get/${id}`)
    return response.json()
}

export const useSingleStudent = (id)=>
{
    return useQuery('get-single-student',()=>getSingleStudent(id))
}