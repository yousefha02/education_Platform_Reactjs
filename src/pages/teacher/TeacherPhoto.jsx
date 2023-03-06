import { Button,styled ,Box} from '@mui/material'
import React, { useState } from 'react'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import Navbar from '../../components/Navbar'
import { useTranslation } from 'react-i18next';

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
    const {t} = useTranslation();


    const handleButtonSubmit = async ()=> {
       
    }

    return (
        <Navbar>
        <TeacherLayout active={1} title={t('profile_photo')}>
            <input type="file" id="image" hidden onChange={(e)=>setImage(e.target.files[0])}/>
            <Button variant='contained' sx={{textTransform:"capitalize",padding:0,marginBottom:"20px"}}>
                <Label htmlFor='image'>{t('replace_photo')}</Label>
            </Button>
            <Box>
            {
                image&&
                <Image src={URL.createObjectURL(image)}/>
            }
            </Box>
            <StepperButtons link="AdditionalInformation" onSubmit={handleButtonSubmit}/>
        </TeacherLayout>
        </Navbar>
    )
}
