import {useQuery} from 'react-query'

async function getLangLevels()
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/languageLevel`)
    return response.json()
}

export const useLangLevel = ()=>
{
    return useQuery('get-lang-levels',getLangLevels)
}