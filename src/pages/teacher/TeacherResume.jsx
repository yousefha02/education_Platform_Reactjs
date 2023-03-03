import React from 'react'
import Navbar from '../../components/Navbar'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import {Box, Divider, Typography} from '@mui/material'
import WorkExperience from '../../components/teacher/WorkExperience'
import ProfessionalCertificates from '../../components/teacher/ProfessionalCertificates'
import EducationDegrees from '../../components/teacher/EducationDegrees'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import { useTranslation } from 'react-i18next';

export default function TeacherResume() {
    const {t} = useTranslation()
    return (
        <Navbar>
            <TeacherLayout active={4} title={t('resume')}>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>{t('workExper')}</Typography>
                    <WorkExperience/>
                </Box>
                <Divider/>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>{t('professionalCertificates')}</Typography>
                    <ProfessionalCertificates/>
                </Box>
                <Divider/>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>{t('degrees')}</Typography>
                    <EducationDegrees/>
                </Box>
                <StepperButtons link="availability"/>
            </TeacherLayout>
        </Navbar>
    )
}
