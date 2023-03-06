import { Autocomplete, Box  , Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, styled, TextField, Typography} from '@mui/material'
import React from 'react'
import cover from '../../../images/Rectangle7.png'
import { useTranslation } from 'react-i18next';
import {useSubjectCategoreis} from '../../../hooks/useSubjectCategoreis'
import { useLevels } from '../../../hooks/useLevels';
import { useState } from 'react';

const Wrapper = styled(Box)({
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    color:"white",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    height:"80vh"
})

export default function LandingBanner() {
    const {t} = useTranslation()
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
        <Wrapper sx={{backgroundImage:`url(${cover})`}} className="overlay">
            <Container>
                <Typography sx={{marginBottom:"70px",fontSize:{md:"28px", xs:"18px"} , 
                position:"relative" , fontWeight:"bold"}} color="secondary">
                مع معلمي , لا تقلق بشأن الدراسة وذاكر بالوقت والمكان اللي يناسبك
                </Typography>
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
            </Container>
        </Wrapper>
    )
}
