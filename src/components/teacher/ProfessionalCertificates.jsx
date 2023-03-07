import { Box ,Button,Grid} from '@mui/material'
import React, { useState } from 'react'
import FormProfessionalCertificates from './FormProfessionalCertificates'
import { useTranslation } from 'react-i18next';

export default function ProfessionalCertificates({setCertificates,certificates}) {

    const {t} = useTranslation()

    function addNewCertificates()
    {
        setCertificates(back=>[...back,{name:"Institution",from:"2021",to:"2023",subject:"Subject",id:certificates.length+1}])
    }

    function handleChangeCertificates(e,item)
    {
        const {value,name} = e.target
        setCertificates(back=>back.map(certificate=>
        {
            return certificate===item?{...certificate,[name]:value}:certificate
        }))
    }

    function handleDeleteCertificates(item)
    {
        const newCertificates = certificates.filter(exp=>exp!==item)
        setCertificates(newCertificates)
    }

    return (
        <Box sx={{marginBottom:"26px"}}>
            {
                certificates.map((item,index)=>
                {
                    return(
                        <Grid container key={index+'po1'} spacing={3} 
                        sx={{marginBottom:"20px",alignItems:"center"}}>
                            <FormProfessionalCertificates handleDeleteCertificates={handleDeleteCertificates} item={item} handleChangeCertificates={handleChangeCertificates}/>
                        </Grid> 
                    )
                })
            }
            <Button sx={{fontSize:"12px",marginTop:"4px"}} color="secondary"
            onClick={addNewCertificates}>{t('addCer')}</Button>
        </Box>
    )
}