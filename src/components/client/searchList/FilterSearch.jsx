import { Box, Button, Divider, InputLabel, MenuItem, Paper, Select, Switch, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import {useCurriculums} from '../../../hooks/useCurriculums'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function FilterSearch() {
    const {data,isLoading} = useCurriculums()
    const [gender,setGender] = useState('all')
    const [curriculum ,setCurriculum ] = useState('all')
    const [spackArabic,setSpeakArabic] = useState(false)
    const [isVideo,setIsVideo] = useState(false)

    return (
        <Paper sx={{paddingY:"16px"}}>
            <Typography sx={{paddingX:"10px",fontSize:"16px",fontWeight:"bold"}}>فلتر البحث</Typography>
            <Divider sx={{marginTop:"12px"}}/>
            <Box sx={{padding:"10px"}}>
                <Box sx={{marginY:"16px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px",fontWeight:"bold",color:"#151313"}}>المنهاج الدراسي</InputLabel>
                    <Select
                    size='small'
                    fullWidth
                    onChange={(e)=>setCurriculum(e.target.value)}
                    value={curriculum}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    >
                        <MenuItem value={'all'}>الكل</MenuItem>
                        {
                            !isLoading&&data?.data.length>0&&
                            data.data.map((item,index)=>
                            {
                                return <MenuItem value={item.id}>{item.titleAR}</MenuItem>
                            })
                        }
                    </Select>
                </Box>
                <Box sx={{marginY:"16px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px",fontWeight:"bold",color:"#151313"}}>الجنس</InputLabel>
                    <Select
                    size='small'
                    fullWidth
                    onChange={(e)=>setGender(e.target.value)}
                    value={gender}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    >
                        <MenuItem value={'all'}>الكل</MenuItem>
                        <MenuItem value={'male'}>ذكر</MenuItem>
                        <MenuItem value={'female'}>أنثى</MenuItem>
                    </Select>
                </Box>
                <Box sx={{marginY:"16px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px",fontWeight:"bold",color:"#151313"}}>يتحدث العربية</InputLabel>
                    <Switch {...label} checked={spackArabic} onChange={()=>setSpeakArabic(back=>!back)}/>
                </Box>
                <Box sx={{marginY:"16px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px",fontWeight:"bold",color:"#151313"}}>يحتوي على فيديو فقط</InputLabel>
                    <Switch {...label} checked={isVideo} onChange={()=>setIsVideo(back=>!back)}/>
                </Box>
                <Button variant="contained" fullWidth>تطبيق الكل</Button>
            </Box>
        </Paper>
    )
}
