import { Box ,Button,Grid} from '@mui/material'
import React, { useState } from 'react'
import FormEducationDegrees from './FormEducationDegrees'
import { useTranslation } from 'react-i18next';

export default function EducationDegrees({degrees,setDegrees}) {
    const {t} = useTranslation()

    function addNewDegree()
    {
        setDegrees(back=>[...back,{UniversityName:"University",from:"2021",to:"2023",degree:"Degrees",id:degrees.length+1}])
    }

    function handleChangeDegrees(e,item)
    {
        const {value,name} = e.target
        setDegrees(back=>back.map(degrees=>
        {
            return degrees===item?{...degrees,[name]:value}:degrees
        }))
    }

    function handleDeleteDegrees(item)
    {
        const newDegrees = degrees.filter(exp=>exp!==item)
        setDegrees(newDegrees)
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
            <Button sx={{fontSize:"12px",marginTop:"4px"}} color="secondary"
            onClick={addNewDegree}>{t('addDegree')}</Button>
        </Box>
    )
}