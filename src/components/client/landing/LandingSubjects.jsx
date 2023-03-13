import { Box, Button, Container,Grid,Paper,styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSubjects } from '../../../hooks/useSubject'
import Loading from '../../Loading'
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { useState } from 'react'
import { useEffect } from 'react'

const Image = styled("img")({
    width:"100%",
    height:"160px",
    borderRadius:"8px"
})

export default function LandingSubjects() {
    const {t} = useTranslation()
    const {data,isLoading} = useSubjects()
    const [isAll,setIsAll] = useState(false)

    return (
        <Container sx={{minHeight:"20vh",marginY:"60px"}}>
            {
                !isLoading?
                <>
                <Grid container spacing={3}>
                {
                data?.data.length>0&&
                isAll?
                data.data.map((item,index)=>
                {
                    return(
                        <Grid xs={12} sm={6} md={4} lg={3} item key={index+'vc1'}>
                            <Link to={`/filter/${item.id}`}>
                                <Paper sx={{padding:"10px 10px 20px"}}>
                                    <Image src={"https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="}/>
                                    <Typography sx={{textAlign:"center",marginTop:"8px",
                                    color:"#151313",fontSize:"18px",fontWeight:"bold"}}>
                                        {Cookies.get("i18next")==="ar"?item.titleAR:item.titleEN}
                                    </Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    )
                })
                :
                data.data.slice(0,4).map((item,index)=>
                {
                    return(
                        <Grid xs={12} sm={6} md={4} lg={3} item key={index+'vc1'}>
                            <Link to={`/filter/${item.id}`}>
                                <Paper sx={{padding:"10px 10px 20px"}}>
                                    <Image src={"https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="}/>
                                    <Typography sx={{textAlign:"center",marginTop:"8px",
                                    color:"#151313",fontSize:"18px",fontWeight:"bold"}}>
                                        {Cookies.get("i18next")==="ar"?item.titleAR:item.titleEN}
                                    </Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    )
                })
                }
                </Grid>
                {!isAll&&<Box sx={{marginTop:"30px",display:"flex",justifyContent:"center"}}>
                    <Button variant="contained" onClick={()=>setIsAll(true)}>{t('loadMore')}</Button>
                </Box>}
                </>
                :
                <Loading/>
            }
        </Container>
    )
}
