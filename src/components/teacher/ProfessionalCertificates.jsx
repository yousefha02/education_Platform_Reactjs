import { Box ,Button,Grid} from '@mui/material'
import React, { useState } from 'react'
import FormProfessionalCertificates from './FormProfessionalCertificates'

export default function ProfessionalCertificates() {
    const [certificates,setCertificates] = useState([])

    function addNewCertificates()
    {
        setCertificates(back=>[...back,{institution:"Institution",from:"2021",to:"2023",subject:"Subject",id:certificates.length+1}])
    }

    function handleChangeCertificates(e,id)
    {
        const {value,name} = e.target
        setCertificates(back=>back.map(certificate=>
        {
            return certificate.id===id?{...certificate,[name]:value}:certificate
        }))
    }

    return (
        <Box sx={{marginBottom:"26px"}}>
            {
                certificates.map((item,index)=>
                {
                    return(
                        <Grid container key={index+'po1'} spacing={3} 
                        sx={{marginBottom:"20px",alignItems:"center"}}>
                            <FormProfessionalCertificates item={item} handleChangeCertificates={handleChangeCertificates}/>
                        </Grid> 
                    )
                })
            }
            <Button sx={{fontSize:"12px",marginTop:"4px"}} color="secondary"
            onClick={addNewCertificates}>Add another certificate</Button>
        </Box>
    )
}