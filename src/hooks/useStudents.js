import {useQuery} from 'react-query'

async function getStudents()
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/student/all`)
    return response.json()
}

export const useStudents = ()=>
{
    return useQuery('get-students',getStudents)
}