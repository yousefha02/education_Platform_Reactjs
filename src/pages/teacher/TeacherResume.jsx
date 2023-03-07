import React, { useRef } from 'react'
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
import MyForm from '../../components/TestArray'

export default function TeacherResume() {
    const navigate = useNavigate()
    const {t} = useTranslation()
    const {teacher,token} = useSelector((state)=>state.teacher)
    const {isLoading,data} = useTeacher(teacher?.id)

    const [certificates,setCertificates] = useState([])
    const [Experience,setExperience] = useState([])
    const childComponentRef = useRef(null);
    const childComponentRefTwo = useRef(null);
    const childComponentRefThree = useRef(null);

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
    },[data , isLoading])


    async function onSubmit()
    {
        setLoad(true);
        const newCertificates = childComponentRefTwo.current.r.map(cert=>
        {
            return {TeacherId:teacher?.id,from:cert.from,to:cert.to,subject:cert.subject,name:cert.name}
        })


        const newExperiences = childComponentRef.current.r.map(exp=>
        {
            return {TeacherId:teacher?.id,from:exp.from,to:exp.to,companyName:exp.companyName,jobTitle:exp.jobTitle}
        });

        const newDegress = childComponentRefThree.current.r.map(deg=>
        {
            return {TeacherId:teacher?.id,from:deg.from,to:deg.to,UniversityName:deg.UniversityName,degree:deg.degree}
        })
        try{
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
        catch(err){
            console.log(err);
        }
    }

    return (
        <Navbar>
            <TeacherLayout active={4} title={t('resume')}>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>{t('workExper')}</Typography>
                    <WorkExperience Experience={Experience} setExperience={setExperience} ref={childComponentRef}/>
                </Box>
                <Divider/>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>{t('professionalCertificates')}</Typography>
                    <ProfessionalCertificates certificates={certificates} setCertificates={setCertificates} ref={childComponentRefTwo}/>
                </Box>
                <Divider/>
                <Box sx={{marginY:"30px"}}>
                    <Typography sx={{fontSize:"20px",marginBottom:"10px"}}>{t('degrees')}</Typography>
                    <EducationDegrees degrees={degrees} setDegrees={setDegrees} ref={childComponentRefThree}/>
                </Box>
                <StepperButtons load={load} onSubmit={onSubmit}/>
            </TeacherLayout>
        </Navbar>
    )
}
