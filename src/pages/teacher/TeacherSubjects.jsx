import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import CheckBoxSubjects from '../../components/teacher/CheckBoxSubjects'
import { Divider, Grid, Typography } from '@mui/material';
import SelectedCategory from '../../components/teacher/SelectedCategory';

const fakeData = [
    {title:"Arabic",categs:[{title:"one",id:1},{title:"two",id:2}]},
    {title:"Math",categs:[{title:"three",id:3},{title:"four",id:4}]},
    {title:"English",categs:[{title:"en",id:5}]}
]

export default function TeacherSubjects() {
    const [choseCategories,setChosenCategories] = useState([])

    function handleDeleteSelectedCategory(id)
    {
        setChosenCategories(back=>back.filter(categ=>categ.id!==id))
    }

    return (
        <Navbar>
            <TeacherLayout active={3} title="Subjects">
                <Grid container spacing={4}>
                    <Grid item xs={9}>
                    {
                        fakeData.map((subject,index)=>
                        {
                            return <CheckBoxSubjects subject={subject} key={index+'p1'} 
                                    choseCategories={choseCategories} 
                                    setChosenCategories={setChosenCategories}/>
                        })
                    }
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{fontSize:"15px",marginBottom:"12px"}}>Selected Subjects</Typography>
                        <Divider/>
                        {
                            choseCategories.length>0&&choseCategories.map((categ,index)=>
                            {
                                return <SelectedCategory categ={categ} key={index+"p1"}
                                onClick={()=>handleDeleteSelectedCategory(categ.id)}/>
                            })
                        }
                    </Grid>
                </Grid>
            </TeacherLayout>
        </Navbar>
    )
}
