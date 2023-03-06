import {useQuery} from 'react-query'

async function getSubject(id)
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/subCategory/${id}`)
    return response.json()
}

export const useSingleSubject = (id)=>
{
    return useQuery('get-subject',()=>getSubject(id))
}