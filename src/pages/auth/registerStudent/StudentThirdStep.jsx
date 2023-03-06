import { Box, Button, Container, Paper} from '@mui/material'
import React, { useEffect, useRef } from 'react'
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import ReactCodeInput from "react-code-input";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {useSnackbar} from 'notistack'
import { useState } from 'react';

export default function StudentThirdStep() {
    const input1 = useRef();
    const navigate = useNavigate()
    const {t} = useTranslation()
    const {closeSnackbar,enqueueSnackbar} = useSnackbar()
    const [load,setLoad] = useState(false)

    useEffect(()=>
    {
        if(!localStorage.getItem('studentCode'))
        {
            navigate('/studentregister/step1')
        }
    },[])

    async function savePassword()
    {
        closeSnackbar()
        setLoad(true)
        try{
            if(input1.current.state.value.length!==4)
            {
                enqueueSnackbar('length should be 4',{variant:"error",autoHideDuration:"8000"})
                throw new Error('failed occured')
            }
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/student/signup/pass`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({password:input1.current.state.value,email:localStorage.getItem('studentEmail')})
            })
            const resData = await response.json()
            if(response.status!==200&&response.status!==201)
            {
                setLoad(false)
                enqueueSnackbar(resData.message,{variant:"error",autoHideDuration:"8000"})
                throw new Error('failed occured')
            }
            navigate('/studentregister/step4')
            setLoad(false)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    return (
        <Navbar>
            <Container>
                <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"60px auto 60px"}}>
                    <HeaderSteps step={3} title={t('enterpassword')} steps={4}/>
                        <Box sx={{marginTop:"40px",marginBottom:"80px"}}>
                            <ReactCodeInput type='number' fields={4} ref={input1}/>
                        </Box>
                        {!load?
                        <Button variant='contained' color="secondary" fullWidth type='submit'
                        sx={{textTransform:"capitalize"}}
                        onClick={savePassword}>{t('savepassword')}</Button>
                        :
                        <Button variant='contained' color="secondary" fullWidth
                        sx={{textTransform:"capitalize"}}
                        onClick={savePassword}>{t('savepassword')}...</Button>
                        }
                </Paper>
            </Container>
        </Navbar>
    )
}
