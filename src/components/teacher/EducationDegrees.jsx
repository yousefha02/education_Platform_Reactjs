import { Box ,Button,Grid} from '@mui/material'
import React, { useState } from 'react'
import FormEducationDegrees from './FormEducationDegrees'

export default function EducationDegrees() {
    const [degrees,setDegrees] = useState([])

    function addNewDegree()
    {
        setDegrees(back=>[...back,{university:"University",from:"2021",to:"2023",degrees:"Degrees",id:degrees.length+1}])
    }

    function handleChangeDegrees(e,id)
    {
        const {value,name} = e.target
        setDegrees(back=>back.map(degrees=>
        {
            return degrees.id===id?{...degrees,[name]:value}:degrees
        }))
    }

    return (
        <Box sx={{marginBottom:"26px"}}>
            {
                degrees.map((item,index)=>
                {
                    return(
                        <Grid container key={index+'po1'} spacing={3} 
                        sx={{marginBottom:"20px",alignItems:"center"}}>
                            <FormEducationDegrees item={item} handleChangeDegrees={handleChangeDegrees}/>
                        </Grid> 
                    )
                })
            }
            <Button sx={{fontSize:"12px",marginTop:"4px"}} onClick={addNewDegree}>Add another degree</Button>
        </Box>
    )
}