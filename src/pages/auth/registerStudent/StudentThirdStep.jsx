import { Box, Button, Container, Paper} from '@mui/material'
import React, { useRef } from 'react'
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import ReactCodeInput from "react-code-input";
import { useNavigate } from 'react-router-dom';

export default function StudentThirdStep() {
    const input1 = useRef();
    const navigate = useNavigate()

    return (
        <Navbar>
            <Container>
                <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"45px auto 60px"}}>
                    <HeaderSteps step={3} title="Enter your password" steps={4}/>
                    <form>
                        <Box sx={{marginTop:"40px",marginBottom:"80px"}}>
                            <ReactCodeInput type='number' fields={4} ref={input1}/>
                        </Box>
                        <Button variant='contained' color="secondary" fullWidth type='submit'
                        sx={{textTransform:"capitalize"}}
                        onClick={()=>navigate('/studentregister/step4')}>Save your password</Button>
                    </form>
                </Paper>
            </Container>
        </Navbar>
    )
}
