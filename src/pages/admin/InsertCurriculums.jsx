import { Typography,Button, Box, InputLabel, FormControl, Select, MenuItem } from '@mui/material'
import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

export default function InsertCurriculums() {
    const [value, setValue] = useState([]);
    const [curriculum,setCurriculum] = useState()

    const levels = [{name:"advanced",id:1},{name:"elemntary",id:2},{name:"beginner",id:3}]


    async function handelInsert()
    {
        const levels = value.map((item,index)=>
        {
            return item.id
        })
    }
    
    return (
        <AdminLayout>
            <Box sx={{marginBottom:"60px",width:"450px",maxWidth:"100%"}}>
                <Typography sx={{fontSize:"24px",fontWeight:"600",color:"#424242",marginBottom:"15px"}}>Insert Curriculum to Levels</Typography>
                {levels?.length>0&&
                <Autocomplete
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                multiple
                id="size-small-standard-multi"
                size="small"
                options={levels}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Levels"
                />
                )}
            />}
            <Box sx={{marginTop:"40px"}}>
                <InputLabel sx={{marginBottom:"8px",fontSize:"13px"}}>Study Curriculum</InputLabel>
                <FormControl fullWidth>
                    <Select
                    onChange={(e)=>setCurriculum(e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    >
                        <MenuItem value={'british'}>British</MenuItem>
                        <MenuItem value={'american'}>American</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Button sx={{marginTop:"20px"}} variant="contained" onClick={handelInsert}>Save</Button>
            </Box>
        </AdminLayout>
    )
}