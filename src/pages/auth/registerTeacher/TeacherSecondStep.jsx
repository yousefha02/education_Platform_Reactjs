import { Box, Button, Container, Paper ,styled} from '@mui/material'
import React, { useRef } from 'react'
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import gmailImage from '../../../images/gmail.png'
import ReactCodeInput from "react-code-input";
import { useNavigate } from 'react-router-dom';

const Image = styled('img')({
    width:"180px",
    height:"136px"
})

export default function TeacherSecondStep() {
    const input1 = useRef();
    const navigate = useNavigate()

    async function confirmCode()
    {
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({code:input1.current.state.value,email:""})
            })
            const resData = await response.json()
            if(response.status!==200&&response.status!==201)
            {
                throw new Error('failed occured')
            }
            navigate('/teacherRegister/step3')
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
                    <HeaderSteps step={2} title="Verify your Email" steps={3}/>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <Image src={gmailImage}/>
                        </Box>
                        <Box sx={{marginTop:"40px",marginBottom:"80px"}}>
                            <ReactCodeInput type='number' fields={4} ref={input1}/>
                        </Box>
                        <Button variant='contained' color="secondary" fullWidth type='submit'
                        sx={{textTransform:"capitalize"}} onClick={confirmCode}>Confirm Code</Button>
                </Paper>
            </Container>
        </Navbar>
    )
}
