import {useQuery} from 'react-query'

async function getLevels()
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/levels`)
    return response.json()
}

export const useLevels = ()=>
{
    return useQuery('get-levels',getLevels)
}