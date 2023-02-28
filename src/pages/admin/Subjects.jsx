import React, { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { Box, Button, Dialog, Grid, Typography,styled } from '@mui/material';
import AddSubject from '../../components/admin/AddSubject';

const Image = styled("img")({
    width:"80%",
    height:"160px",
    borderRadius:"8px"
})

export default function Subjects() {
    
    const [openAddYear,setOpenAddYear] = useState(false)
    function handleClose()
    {
        setOpenAddYear(false)
    }

    const subjects = ['Arabic','Math','Science','English','Regligon','Chemistry','Counputer']

    return (
    <AdminLayout>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginY:"30px"}}>
            <Typography sx={{fontSize:"20px",fontWeight:"500"}}>Subjects</Typography>
            <Button onClick={()=>setOpenAddYear(true)}
            sx={{textTransform:"capitalize"}} variant="contained">Add Subject</Button>
        </Box>
        <Grid container spacing={2} justifyContent="center">
        {
            subjects.map((subject,index)=>
            {
                return(
                    <Grid item xs={6} md={4} lg={3} key={index+'aq1'}>
                        <Box sx={{backgroundColor:"#59aefc1a",borderRadius:"6px",padding:"16px 10px",textAlign:"center"}}>
                            <Image src={'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='}/>
                            <Typography sx={{fontSize:"20px",fontWeight:"600",marginBottom:"8px"}}>{subject}</Typography>
                            <Typography sx={{fontSize:"13px"}}>3 categories</Typography>
                        </Box>
                    </Grid>
                )
            })
        }
        </Grid>
        <Dialog onClose={handleClose} open={openAddYear}>
            <AddSubject handleClose={handleClose}/>
        </Dialog>
    </AdminLayout>
)
}