import {useQuery} from 'react-query'

async function getClasses()
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/classes`)
    return response.json()
}

export const useClasses = ()=>
{
    return useQuery('get-classes',getClasses)
}