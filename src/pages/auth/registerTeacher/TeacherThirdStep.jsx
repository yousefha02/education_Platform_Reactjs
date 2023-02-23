import { Box, Button, Container, Paper} from '@mui/material'
import React, { useRef } from 'react'
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import ReactCodeInput from "react-code-input";
import { useNavigate } from 'react-router-dom';

export default function TeacherThirdStep() {
    const input1 = useRef();
    const navigate = useNavigate()

    async function savePassword()
    {
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({password:input1.current.state.value})
            })
            const resData = await response.json()
            if(response.status!==200&&response.status!==201)
            {
                throw new Error('failed occured')
            }
            navigate('/teacher/about')
        }
        catch(err)
        {
            console.log(err)
        }
    }

    return (
        <Navbar>
            <Container>
                <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"45px auto 60px"}}>
                    <HeaderSteps step={3} title="Enter your password" steps={3}/>
                        <Box sx={{marginTop:"40px",marginBottom:"80px"}}>
                            <ReactCodeInput type='number' fields={4} ref={input1}/>
                        </Box>
                        <Button variant='contained' color="secondary" fullWidth type='submit'
                        sx={{textTransform:"capitalize"}} onClick={savePassword}>Save your password</Button>
                </Paper>
            </Container>
        </Navbar>
    )
}
