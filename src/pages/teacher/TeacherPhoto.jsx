import { Button,styled ,Box} from '@mui/material'
import React, { useState } from 'react'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import Navbar from '../../components/Navbar'

const Label = styled("label")({
    width:"100%",
    display:"block",
    padding:"6px 16px",
    cursor:"pointer"
})

const Image = styled('img')({
    width:"300px"
})

export default function TeacherPhoto() {
    
    const [image,setImage] = useState(null)

    return (
        <Navbar>
        <TeacherLayout active={1} title="Profile Photo">
            <input type="file" id="image" hidden onChange={(e)=>setImage(e.target.files[0])}/>
            <Button variant='contained' sx={{textTransform:"capitalize",padding:0,marginBottom:"20px"}}>
                <Label htmlFor='image'>Replace Photo</Label>
            </Button>
            <Box>
            {
                image&&
                <Image src={URL.createObjectURL(image)}/>
            }
            </Box>
            <StepperButtons link="AdditionalInformation"/>
        </TeacherLayout>
        </Navbar>
    )
}
