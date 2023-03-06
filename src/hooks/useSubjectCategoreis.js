import {useQuery} from 'react-query'

async function getSubjectCategoreis()
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/subjects`)
    return response.json()
}

export const useSubjectCategoreis = ()=>
{
    return useQuery('get-Subject-Categoreis',getSubjectCategoreis)
}