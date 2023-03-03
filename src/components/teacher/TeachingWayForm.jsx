import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { useState } from 'react';
import TeachingWayDetailsForm from './TeachingWayDetailsForm';
import { useTranslation } from 'react-i18next';

export default function TeachingWayForm() {
    const {t} = useTranslation()
    const [online,setOnline] = useState(false)
    const [person,setPerson] = useState(false)
    const [studentHome,setStudentHome] = useState(false)
    const [teeacherHome,setTeacherHome] = useState(false)
    return (
        <Box>
            <Box sx={{marginBottom:"30px"}}>
                <FormControlLabel control={<Checkbox onChange={()=>setOnline(back=>!back)} checked={online}/>}
                label={t('online')} />
                {online&&<TeachingWayDetailsForm/>}
            </Box>
            <Box>
                <FormControlLabel control={<Checkbox onChange={()=>setPerson(back=>!back)} checked={person}/>}
                label={t('person')} />
                {
                    person&&
                    <Box sx={{paddingX:"20px",marginTop:"20px"}}>
                        <Box sx={{marginBottom:"30px"}}>
                            <FormControlLabel control={<Checkbox size='small' onChange={()=>setTeacherHome(back=>!back)} checked={teeacherHome}/>}
                            label={t('home')} />
                            {teeacherHome&&<TeachingWayDetailsForm/>}
                        </Box>
                        <Box sx={{marginBottom:"30px"}}>
                            <FormControlLabel control={<Checkbox size='small' onChange={()=>setStudentHome(back=>!back)} checked={studentHome}/>}
                            label={t('studenthome')} />
                            {studentHome&&<TeachingWayDetailsForm/>}
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
    )
}
