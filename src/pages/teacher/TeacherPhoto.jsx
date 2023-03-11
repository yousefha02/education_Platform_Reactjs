import { Button,styled ,Box} from '@mui/material'
import React, { useState } from 'react'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import Navbar from '../../components/Navbar'
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


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
    const {closeSnackbar,enqueueSnackbar} = useSnackbar();
    const {teacher,token} = useSelector((state)=>state.teacher);
    const [load,setLoad] = useState(false);
    const navigate = useNavigate()

    const handleButtonSubmit = async ()=> {
        try{
            closeSnackbar();
            if(!image){
                enqueueSnackbar(t('image_required') , {variant:"error" , autoHideDuration:2000});
                throw new Error('image is not found')
            }
            setLoad(true)
            const formData = new FormData();
            formData.append('image' , image);
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/image/${teacher.id}`,{
                method:"POST",
                headers:{
                    "Authorization":token
                },
                body:formData
            })
            if(response.status!==200&&response.status!==201)
            {
                throw new Error('failed occured')
            }
            setLoad(false)
            const resData = await response.json();
            console.log(resData)
            navigate('/teacher/AdditionalInformation')
        }
        catch(err)
        {
            console.log(err)
        }
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
            <StepperButtons skipLink={"AdditionalInformation"} onSubmit={handleButtonSubmit} load={load}/>
        </TeacherLayout>
        </Navbar>
    )
}
