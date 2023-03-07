import { Box ,Button,Grid} from '@mui/material'
import React, { useState } from 'react'
import FormWorkExperience from './FormWorkExperience'
import { useTranslation } from 'react-i18next';

export default function WorkExperience({Experience,setExperience}) {
    const {t} = useTranslation()

    function addNewExperience()
    {
        setExperience(back=>[...back,{jobTitle:"Job",from:"2021",to:"2023",companyName:"Company",id:WorkExperience.length+1}])
    }

    function handleChangeWorkExperience(e,item)
    {
        const {value,name} = e.target
        setExperience(back=>back.map(work=>
        {
            return work===item?{...work,[name]:value}:work
        }))
    }

    function handleDeleteExperiecnce(item)
    {
        const newExperiecnces = Experience.filter(exp=>exp!==item)
        setExperience(newExperiecnces)
    }

    return (
        <Box sx={{marginBottom:"26px"}}>
            {
                Experience.map((item,index)=>
                {
                    return(
                        <Grid container key={index+'po1'} spacing={3} 
                        sx={{marginBottom:"20px",alignItems:"center"}}>
                            <FormWorkExperience handleDeleteExperiecnce={handleDeleteExperiecnce} item={item} handleChangeWorkExperience={handleChangeWorkExperience}/>
                        </Grid> 
                    )
                })
            }
            <Button sx={{fontSize:"12px",marginTop:"4px"}} color="secondary" onClick={addNewExperience}>{t('addExp')}</Button>
        </Box>
    )
}