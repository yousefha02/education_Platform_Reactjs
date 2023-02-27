import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import TimezoneSelect from 'react-timezone-select'

export default function SelectTimeZone() {
    const [selectedTimezone, setSelectedTimezone] = useState({})
    console.log(selectedTimezone)
    return (
        <Box sx={{marginTop:"20px",marginBottom:"30px"}}>
            <TimezoneSelect
            value={selectedTimezone}
            onChange={setSelectedTimezone}
            />
        </Box>
    )
}
