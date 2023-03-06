import {useQuery} from 'react-query'

async function getCurriculums()
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/curriculums`)
    return response.json()
}

export const useCurriculums = ()=>
{
    return useQuery('get-Curriculums',getCurriculums)
}