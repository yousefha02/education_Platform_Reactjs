import { Autocomplete, Box, TextField, Paper, Grid, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material'
import React, { useState } from 'react'
import { useLevels } from '../../../hooks/useLevels';
import { useSubjectCategoreis } from '../../../hooks/useSubjectCategoreis';

export default function HeaderSearchList() {

    const categoriesData = useSubjectCategoreis()
    const levelsData = useLevels()

    /** handle level */
    const [level, setLevel] = React.useState('');
    const handleChange = (event) => {
        setLevel(event.target.value);
    };

    /** handel categoires */
    const [value, setValue] = useState([]);

    return (
        <Paper sx={{padding:"32px 24px"}}>
            <Grid container spacing={2} alignItems="center"
                sx={{backgroundColor:"white",padding:"0px 10px 14px",borderRadius:"6px",position:"relative",zIndex:3}}>
                    <Grid item xs={12} md={6} lg={5}>
                    {!categoriesData.isLoading&&
                    <Autocomplete
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                        multiple
                        id="size-small-standard-multi"
                        size="small"
                        options={categoriesData.data.data}
                        getOptionLabel={(option) => option.titleAR}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="بحث عن موضوع"
                        />
                        )}
                    />}
                    </Grid>
                    <Grid item xs={12} md={6} lg={5}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">مرحلة دراسية</InputLabel>
                            <Select
                            sx={{textAlign:"start"}}
                            placeholder='level'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={level}
                            onChange={handleChange}
                            label="مرحلة دراسية"
                            >
                                {
                                    !levelsData.isLoading&&levelsData.data.data.length>0&&
                                    levelsData.data.data.map((item,index)=>
                                    {
                                        return <MenuItem key={index+'zas'} value={item.id}>{item.titleAR}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={12} lg={2}>
                        <Button variant="contained" fullWidth>بحث</Button>
                    </Grid>
                </Grid>
        </Paper>
    )
}
