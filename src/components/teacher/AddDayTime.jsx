import { Box, Button } from '@mui/material'
import React from 'react'
import FormAddDayTime from './FormAddDayTime'

export default function AddDayTime({day,selectedDays,setSelectedDays}) {
    const checkedDay = selectedDays?.find(selectedDay=>day.id===selectedDay.id)
    
    function addNewTime()
    {
        setSelectedDays(back=>{return back.map(selectedDay=>selectedDay.id===day.id?{...selectedDay,times:[...selectedDay.times,{from:"11:30",to:"13:30"}]}:selectedDay)})
    }

    return (
        <Box>
            <Button sx={{textTransform:"capitalize"}} onClick={addNewTime}>Add more</Button>
            <Box>
            {
                checkedDay.times.map((time,index)=>
                {
                    return(
                        <FormAddDayTime time={time} key={index+'de1'}/>
                    )
                })
            }
            </Box>
        </Box>
    )
}
