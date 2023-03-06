import {useQuery} from 'react-query'

async function getLevel(id)
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/level/${id}`)
    return response.json()
}

export const useSingleLevel = (id)=>
{
    return useQuery('get-single-level',()=>getLevel(id))
}