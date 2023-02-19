import { Box, Button } from '@mui/material'
import React from 'react'

export default function StepperButtons() {
    return (
        <Box sx={{display:"flex",columnGap:"12px",marginTop:"40px"}}>
            <Button sx={{textTransform:"capitalize"}} variant="outlined">Back</Button>
            <Button sx={{textTransform:"capitalize"}} variant="contained" type='submit'>Next</Button>
            <Button sx={{textTransform:"capitalize"}} variant="outlined">Skip</Button>
        </Box>
    )
}
