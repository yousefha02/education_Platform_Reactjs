import { Box, Checkbox, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import AddDayTime from './AddDayTime'
import Cookies from 'js-cookie';

export default function AvailablitlyDay({day,selectedDays,handleToggle,setSelectedDays,setSelectedTimes,selectedTimes}) {
    const lang = Cookies.get("i18next") || "en";
    return (
        <Box sx={{marginTop:"20px",marginBottom:"30px"}}>
            <ListItemButton role={undefined} onClick={handleToggle(day)} dense>
                <ListItemIcon>
                    <Checkbox
                    size="small"
                    edge="start"
                    checked={selectedDays?.findIndex(selectedDay=>day.id===selectedDay) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': day.id }}
                    />
                </ListItemIcon>
                <ListItemText id={day.id} primary={lang==="ar"?day.titleAR:day.titleEN} sx={{textAlign:"start",fontSize:"24px"}}/>
            </ListItemButton>
            {
                selectedDays?.findIndex(selectedDay=>selectedDay===day.id)!==-1&&
                <AddDayTime setSelectedTimes={setSelectedTimes} selectedTimes={selectedTimes} day={day}/>
            }
        </Box>
    )
}
