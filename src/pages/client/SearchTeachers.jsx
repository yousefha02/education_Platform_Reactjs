import { Box, Button, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FilterSearch from '../../components/client/searchList/FilterSearch'
import HeaderSearchList from '../../components/client/searchList/HeaderSearchList'
import TeacherSearchBox from '../../components/client/searchList/TeacherSearchBox'
import Navbar from '../../components/Navbar'
import {useLocation} from 'react-router-dom'
import Loading from '../../components/Loading'
export default function SearchTeachers() {
    const {state} = useLocation();
    //  side bar search
    const [gender,setGender] = useState('all')
    const [curriculum ,setCurriculum ] = useState('all')
    const [spackArabic,setSpeakArabic] = useState(false)
    const [isVideo,setIsVideo] = useState(false);

    const [teachers , setTeachers] = useState([]);
    const [isLoading , setIsLoading] = useState(false);

    // top bar search
    const [level, setLevel] =useState('');
    /** handel categoires */
    const [value, setValue] = useState([]);
    console.log(value);


    const handleSideFilter = async () =>{
        setIsLoading(true);
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/search/side`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    videoLink:isVideo  , gender :gender  , LanguageId : spackArabic , CurriculumId: curriculum
                })
            });
            const resData = await response.json();
            if(resData.status !== 200 && resData.status!==201){
                throw new Error('');
            }
            setTeachers(resData.data);
            setIsLoading(false);
        }
        catch(err){
            console.log(err);
        }
    }

    const handleTopFilter = async () =>{
        setIsLoading(true);
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/search/top`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    LevelId:level , subjects:value.map(val=>val?.id)
                })
            });
            const resData = await response.json();
            if(resData.status !== 200 && resData.status!==201){
                throw new Error('');
            }
            setTeachers(resData.data);
            setIsLoading(false);
        }
        catch(err){
            console.log(err);
        }
    }

    // useEffect(()=>{
    //     async function getTeachers(){
    //         try{
    //             const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/search/side`,{
    //                 method:"POST",
    //                 headers:{
    //                     "Content-Type":"application/json",
    //                 },
    //                 body:JSON.stringify({
    //                     videoLink:isVideo  , gender :gender  , LanguageId : spackArabic , CurriculumId: curriculum
    //                 })
    //             });
    //             const resData = await response.json();
    //             if(resData.status !== 200 && resData.status!==201){
    //                 throw new Error('');
    //             }
    //             console.log(resData);
    //         }
    //         catch(err){
    //             console.log(err);
    //         }
    //     };
    //     getTeachers();
    // },[])

    return (
        <Navbar>
            <Container sx={{marginBottom:"40px",marginTop:"60px"}}>
                <Grid container spacing={3}>
                    <Grid item  xs={9}>
                        <Box sx={{marginBottom:"20px"}}>
                            <HeaderSearchList level={level} setLevel={setLevel} value={value} setValue={setValue} onSearch={handleTopFilter}/>
                        </Box>
                        {
                            isLoading
                            ?
                            <Loading/>
                            :
                            <>
                            {
                                teachers.length>0 &&
                                teachers.map(teacher=>{
                                    return <TeacherSearchBox key={teacher.id+",ekm"} teacher={teacher}/>
                                })
                            }
                            <Button variant="contained" fullWidth>Load More</Button>
                            </>
                        }
                    </Grid>
                    <Grid item xs={3}>
                        <FilterSearch gender={gender} setGender={setGender} curriculum={curriculum} setCurriculum={setCurriculum}
                        spackArabic={spackArabic} setSpeakArabic={setSpeakArabic} isVideo={isVideo} setIsVideo={setIsVideo}
                        onSearch={handleSideFilter}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Navbar>
    )
}