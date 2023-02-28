import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questions = [
    {
        question:"كيف يمكنني تقديم طلب للتدريس عبر موقع مدربي؟",
        answer:'يمكنك تقديم طلبك عبر الموقع باتباع الخطوات المبينة عند الضغط على رابط "تقديم طلب مجانا".'
    },
    {
        question:"كيف يمكنني تقديم طلب للتدريس عبر موقع مدربي؟",
        answer:'يمكنك تقديم طلبك عبر الموقع باتباع الخطوات المبينة عند الضغط على رابط "تقديم طلب مجانا".'
    },
    {
        question:"كيف يمكنني تقديم طلب للتدريس عبر موقع مدربي؟",
        answer:'يمكنك تقديم طلبك عبر الموقع باتباع الخطوات المبينة عند الضغط على رابط "تقديم طلب مجانا".'
    }
]

export default function HomeQuestions() {
    return (
        <Box>
            <Container sx={{marginY:"60px"}}>
                <Typography sx={{fontSize:{md:"26px",xs:"22px"},fontWeight:"700",color:"#151313",textAlign:"center",
                marginBottom:"30px"}}>يوجد الكثير من الأسئلة الشائعة</Typography>
                {
                    questions.map((item,index)=>
                    {
                        return(
                            <Accordion key={index+'kj1'} sx={{marginBottom:"12px"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{fontSize:"14px"}}>{item.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </Container>
        </Box>
    )
}
