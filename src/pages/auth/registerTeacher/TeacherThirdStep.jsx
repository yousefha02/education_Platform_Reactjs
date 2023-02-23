import { Box, Button, Paper} from '@mui/material'
import React, { useRef } from 'react'
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import ReactCodeInput from "react-code-input";

export default function TeacherThirdStep() {
    const input1 = useRef();
    return (
        <Navbar>
            <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"45px auto 60px"}}>
                <HeaderSteps step={3} title="Enter your password" steps={3}/>
                <form>
                    <Box sx={{marginTop:"40px",marginBottom:"80px"}}>
                        <ReactCodeInput type='number' fields={4} ref={input1}/>
                    </Box>
                    <Button variant='contained' color="secondary" fullWidth type='submit'
                    sx={{textTransform:"capitalize"}}>Save your password</Button>
                </form>
            </Paper>
        </Navbar>
    )
}
