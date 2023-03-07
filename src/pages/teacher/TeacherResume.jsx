import React from 'react'
import Navbar from '../../components/Navbar'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import {Box, Divider, Typography} from '@mui/material'
import WorkExperience from '../../components/teacher/WorkExperience'
import ProfessionalCertificates from '../../components/teacher/ProfessionalCertificates'
import EducationDegrees from '../../components/teacher/EducationDegrees'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import { useTranslation } from 'react-i18next';
import {useTeacher} from '../../hooks/useTeacher'
import { useSelector } from 'react-redux'
import { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function TeacherResume() {
    const navigate = useNavigate()
    const {t} = useTranslation()
    const {teacher,token} = useSelector((state)=>state.teacher)
    const {isLoading,data} = useTeacher(teacher?.id)

    const [certificates,setCertificates] = useState([])
    const [Experience,setExperience] = useState([])
    const [degrees,setDegrees] = useState([])
    const [load,setLoad] = useState(false)

    useEffect(()=>
    {
        if(!isLoading&&data)
        {
            setDegrees(data?.data.EducationDegrees)
            setExperience(data?.data.Experiences)
            setCertificates(data?.data.Certificates)
        }
    },[data])

    async function onSubmit()
    {
        const newCertificates = certificates.map(cert=>
        {
            return {TeacherId:teacher?.id,from:cert.from,to:cert.to,subject:cert.subject,name:cert.name}
        })

        const newExperiences = Experience.map(exp=>
        {
            return {TeacherId:teacher?.id,from:exp.from,to:exp.to,companyName:exp.companyName,jobTitle:exp.jobTitle}
        })

        const newDegress = Experience.map(deg=>
        {
            return {TeacherId:teacher?.id,from:deg.from,to:deg.to,UniversityName:deg.UniversityName,degree:deg.degree}
        })

        const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/resume/${teacher.id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify({certificates:newCertificates,experiences:newExperiences,educationDegrees:newDegress})
        })
        setLoad(false)
        navigate('/teacher/availability')
    }

    return (
        <Navbar>
            <TeacherLayout active={4} title={t('resume')}>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>{t('workExper')}</Typography>
                    <WorkExperience Experience={Experience} setExperience={setExperience}/>
                </Box>
                <Divider/>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>{t('professionalCertificates')}</Typography>
                    <ProfessionalCertificates certificates={certificates} setCertificates={setCertificates}/>
                </Box>
                <Divider/>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>{t('degrees')}</Typography>
                    <EducationDegrees degrees={degrees} setDegrees={setDegrees}/>
                </Box>
                <StepperButtons load={load} onSubmit={onSubmit}/>
            </TeacherLayout>
        </Navbar>
    )
}
