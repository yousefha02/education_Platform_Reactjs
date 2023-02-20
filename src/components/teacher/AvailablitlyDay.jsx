import { Box, Checkbox, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import AddDayTime from './AddDayTime'

export default function AvailablitlyDay({day,selectedDays,handleToggle}) {
    return (
        <Box sx={{marginTop:"20px",marginBottom:"30px"}}>
            <ListItemButton role={undefined} onClick={handleToggle(day)} dense>
                <ListItemIcon>
                    <Checkbox
                    size="small"
                    edge="start"
                    checked={selectedDays.indexOf(day) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': day.id }}
                    />
                </ListItemIcon>
                <ListItemText id={day.id} primary={day.title} sx={{textAlign:"start",fontSize:"24px"}}/>
            </ListItemButton>
            {
                selectedDays.indexOf(day) !== -1&&
                <AddDayTime selectedDays={selectedDays}/>
            }
        </Box>
    )
}
