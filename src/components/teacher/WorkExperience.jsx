import { Box ,Button,Grid} from '@mui/material'
import React, { useState } from 'react'
import FormWorkExperience from './FormWorkExperience'

export default function WorkExperience() {
    const [WorkExperience,setWorkExperience] = useState([])

    function addNewExperience()
    {
        setWorkExperience(back=>[...back,{job:"Job",from:"2021",to:"2023",company:"Company",id:WorkExperience.length+1}])
    }

    function handleChangeWorkExperience(e,id)
    {
        const {value,name} = e.target
        setWorkExperience(back=>back.map(work=>
        {
            return work.id===id?{...work,[name]:value}:work
        }))
    }

    return (
        <Box sx={{marginBottom:"26px"}}>
            {
                WorkExperience.map((item,index)=>
                {
                    return(
                        <Grid container key={index+'po1'} spacing={3} 
                        sx={{marginBottom:"20px",alignItems:"center"}}>
                            <FormWorkExperience item={item} handleChangeWorkExperience={handleChangeWorkExperience}/>
                        </Grid> 
                    )
                })
            }
            <Button sx={{fontSize:"12px",marginTop:"4px"}} color="secondary" onClick={addNewExperience}>Add another experience</Button>
        </Box>
    )
}