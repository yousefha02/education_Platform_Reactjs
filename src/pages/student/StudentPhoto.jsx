import React from 'react'
import StudentLayout from '../../components/student/StudentLayout'
import { Button,styled ,Box} from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import {useStudent} from '../../hooks/useStudent'
import {useSelector} from 'react-redux'

const Label = styled("label")({
    width:"100%",
    display:"block",
    padding:"6px 16px",
    cursor:"pointer"
})

const Image = styled('img')({
    width:"500px"
})

export default function StudentPhoto() {
    const {student} = useSelector((state)=>state.student)
    const {data,isLoading} = useStudent(student?.id)
    const [image,setImage] = useState(null)
    const {t} = useTranslation()
    
    function handleChangeImage(e)
    {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }


    return (
        <StudentLayout>
            <input type="file" id="image" hidden onChange={(e)=>handleChangeImage(e)}/>
            <Button variant='contained' sx={{textTransform:"capitalize",padding:0,marginBottom:"20px"}}>
                <Label htmlFor='image'>{t('replace_photo')}</Label>
            </Button>
            <Box>
            {
                image&&
                <Image src={URL.createObjectURL(image)}/>
            }
            {
                !image&&data?.data.image&&
                <Image src={`${process.env.REACT_APP_API_KEY}images/${data.data.image}`}/>
            }
            </Box>
        </StudentLayout>
    )
}
