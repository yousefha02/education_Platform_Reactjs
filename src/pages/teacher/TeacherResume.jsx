import React from 'react'
import Navbar from '../../components/Navbar'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import {Box, Divider, Typography} from '@mui/material'
import WorkExperience from '../../components/teacher/WorkExperience'
import ProfessionalCertificates from '../../components/teacher/ProfessionalCertificates'
import EducationDegrees from '../../components/teacher/EducationDegrees'
import StepperButtons from '../../components/reusableUi/StepperButtons'

export default function TeacherResume() {
    return (
        <Navbar>
            <TeacherLayout active={4} title="My Resume">
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>Work experience</Typography>
                    <WorkExperience/>
                </Box>
                <Divider/>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>Professional certificates</Typography>
                    <ProfessionalCertificates/>
                </Box>
                <Divider/>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>Higher education degrees</Typography>
                    <EducationDegrees/>
                </Box>
                <StepperButtons/>
            </TeacherLayout>
        </Navbar>
    )
}
