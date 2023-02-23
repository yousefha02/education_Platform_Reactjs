import { Box, Button, Paper ,styled} from '@mui/material'
import React, { useRef } from 'react'
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import gmailImage from '../../../images/gmail.png'
import ReactCodeInput from "react-code-input";
import {useNavigate} from 'react-router-dom'

const Image = styled('img')({
    width:"180px",
    height:"136px"
})

export default function StudentSecondStep() {
    const input1 = useRef();
    const navigate = useNavigate()
    return (
        <Navbar>
            <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"45px auto 60px"}}>
                <HeaderSteps step={2} title="Verify your Email" steps={4}/>
                <form>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                        <Image src={gmailImage}/>
                    </Box>
                    <Box sx={{marginTop:"40px",marginBottom:"80px"}}>
                        <ReactCodeInput type='number' fields={4} ref={input1}/>
                    </Box>
                    <Button variant='contained' color="secondary" fullWidth type='submit'
                    sx={{textTransform:"capitalize"}} 
                    onClick={()=>navigate('/studentregister/step3')}>Confirm Code</Button>
                </form>
            </Paper>
        </Navbar>
    )
}
