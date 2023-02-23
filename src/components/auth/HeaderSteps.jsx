import { Box, Typography } from '@mui/material'
import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function HeaderSteps({step,title,steps}) {
    const perecentage = 100 / (steps+1-step)
    return (
        <Box sx={{display:"flex",columnGap:"20px",alignItems:"center",marginBottom:"30px"}}>
            <Box sx={{width:"65px"}}>
                <CircularProgressbar value={perecentage} text={`${step}/${steps}`}
                styles={buildStyles({textColor:"black",pathColor:"#fc5a59"})}/>
            </Box>
            <Box>
                <Typography sx={{fontSize:"26px",fontWeight:"600",marginBottom:"4px"}}>{title}</Typography>
            </Box>
        </Box>
    )
}
