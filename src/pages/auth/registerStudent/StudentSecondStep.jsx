import { Box, Button, Container, Paper ,styled} from '@mui/material'
import React, { useRef } from 'react'
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import gmailImage from '../../../images/gmail.png'
import ReactCodeInput from "react-code-input";
import {useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useState } from 'react';
import {useSnackbar} from 'notistack'

const Image = styled('img')({
    width:"180px",
    height:"136px"
})

export default function StudentSecondStep() {
    const {closeSnackbar,enqueueSnackbar} = useSnackbar()
    const {t} = useTranslation()
    const input1 = useRef();
    const navigate = useNavigate()
    const [load,setLoad] = useState(false)

    useEffect(()=>
    {
        if(!localStorage.getItem('studentEmail'))
        {
            navigate('/studentregister/step1')
        }
    },[])

    async function confirmCode()
    {
        setLoad(true)
        closeSnackbar()
        try{
            if(input1.current.state.value.length!==4)
            {
                enqueueSnackbar('length should be 4',{variant:"error",autoHideDuration:"8000"})
                setLoad(false)
                throw new Error('failed occured')
            }
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/student/signup/code`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({registerCode:input1.current.state.value,email:localStorage.getItem('studentEmail')})
            })
            const resData = await response.json()
            if(response.status!==200&&response.status!==201)
            {
                enqueueSnackbar(resData.message,{variant:"error",autoHideDuration:"8000"})
                setLoad(false)
                throw new Error('failed occured')
            }
            localStorage.setItem('studentCode',true)
            navigate('/studentregister/step3')
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
                    <HeaderSteps step={2} title={t('verifyEmail')} steps={4}/>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <Image src={gmailImage}/>
                        </Box>
                        <Box sx={{marginTop:"40px",marginBottom:"80px"}}>
                            <ReactCodeInput type='number' fields={4} ref={input1}/>
                        </Box>
                        {!load?
                        <Button variant='contained' color="secondary" fullWidth type='submit'
                        sx={{textTransform:"capitalize"}} 
                        onClick={confirmCode}>{t('confirmCode')}</Button>
                        :
                        <Button variant='contained' color="secondary" fullWidth
                        sx={{textTransform:"capitalize"}} 
                        onClick={()=>navigate('/studentregister/step3')}>{t('confirmCode')}...</Button>
                        }
                </Paper>
            </Container>
        </Navbar>
    )
}
