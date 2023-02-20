import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StepperButtons({link}) {
    const navigate = useNavigate()
    return (
        <Box sx={{display:"flex",columnGap:"12px",marginTop:"40px"}}>
            <Button sx={{textTransform:"capitalize"}} variant="outlined">Back</Button>
            <Button sx={{textTransform:"capitalize"}} variant="contained" type='submit'
            onClick={()=>navigate(`/teacher/${link}`)}>Next</Button>
            <Button sx={{textTransform:"capitalize"}} variant="outlined">Skip</Button>
        </Box>
    )
}
