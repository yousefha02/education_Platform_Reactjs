import { Box, Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import FormAddDayTime from './FormAddDayTime'

export default function AddDayTime({day,selectedTimes,setSelectedTimes}) {

    const checkedTimes = selectedTimes.filter(time=>time.DayId===day.id)
    
    function AddNewTime()
    {
        setSelectedTimes(back=>[...back,{from:"20:48",to:"20:48",TeacherId:1,DayId:day.id}])
    }

    function handleChangeTime(e,item)
    {
        const {name,value} = e.target
        setSelectedTimes(back=>back.map(time=>
            {
                return time===item?{...time,[name]:value}:time
            }))
    }    

    function handleDelete(item)
    {
        const times = selectedTimes.filter(time=>time!==item)
        setSelectedTimes(times)
    }
    
    return (
        <Box>
            <Button onClick={AddNewTime} sx={{textTransform:"capitalize"}} color="secondary">Add more</Button>
            <Box>
            {
                checkedTimes.map((time,index)=>
                {
                    return(
                        <FormAddDayTime handleDelete={handleDelete}
                        handleChangeTime={handleChangeTime} time={time} key={index+'de1'}/>
                    )
                })
            }
            </Box>
        </Box>
    )
}