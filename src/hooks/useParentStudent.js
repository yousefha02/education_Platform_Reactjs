import {useQuery} from 'react-query'

async function getParentWaitingNew(token)
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/getStudentsWaiting`,{
        headers:{
            "Authorization":token
        }
    })
    return response.json()
}

export const useParentStudentNew = (token)=>
{
    return useQuery('get-parent-student-new',()=>getParentWaitingNew(token))
}

async function getParentWaitingFinished(token)
{
    const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/getStudentsAccOrRej`,{
        headers:{
            "Authorization":token
        }
    })
    return response.json()
}

export const useParentStudentFinished = (token)=>
{
    return useQuery('get-parent-student-finished',()=>getParentWaitingFinished(token))
}