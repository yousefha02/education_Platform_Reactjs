import {useQuery} from 'react-query'

async function getTeacher(id)
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/getSingleTeacher/${id}`)
    return response.json()
}

export const useTeacher = (id)=>
{
    return useQuery('get-teacher',()=>getTeacher(id))
}