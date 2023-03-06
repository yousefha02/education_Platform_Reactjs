import { Box, Button, Container,Grid,Paper,styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSubjects } from '../../../hooks/useSubject'
import Loading from '../../Loading'

const Image = styled("img")({
    width:"100%",
    height:"160px",
    borderRadius:"8px"
})

export default function LandingSubjects() {
    const {data,isLoading} = useSubjects()
    return (
        <Container sx={{minHeight:"20vh",marginY:"60px"}}>
            {
                !isLoading?
                <>
                <Grid container spacing={3}>
                {
                data.data.length>0&&data.data.map((item,index)=>
                {
                    return(
                        <Grid xs={12} sm={6} md={4} lg={3} item key={index+'vc1'}>
                            <Link to={`/filter/${item.id}`}>
                                <Paper sx={{padding:"10px 10px 20px"}}>
                                    <Image src={"https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="}/>
                                    <Typography sx={{textAlign:"center",marginTop:"8px",
                                    color:"#151313",fontSize:"18px",fontWeight:"bold"}}>
                                        {item.titleAR}
                                    </Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    )
                })
                }
                </Grid>
                <Box sx={{marginTop:"30px",display:"flex",justifyContent:"center"}}>
                    <Button variant="contained">عرض المزيد</Button>
                </Box>
                </>
                :
                <Loading/>
            }
        </Container>
    )
}
