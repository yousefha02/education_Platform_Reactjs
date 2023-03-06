import {useQuery} from 'react-query'

async function getSubjects()
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/subCategories`)
    return response.json()
}

export const useSubjects = ()=>
{
    return useQuery('get-subjects',getSubjects)
}