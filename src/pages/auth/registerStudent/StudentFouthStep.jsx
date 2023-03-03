import { Box, Button, Container, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import { useTranslation } from 'react-i18next';

export default function StudentFouthStep() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            gender:'',
            level:'',
            class:'',
            curriculum:''
        }
    });

    const onSubmit = data => console.log(data);

    const {t} = useTranslation()

    return (
        <Navbar>
            <Container>
                <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"60px auto 60px"}}>
                    <HeaderSteps step={4} title={t('additionalInformation')} steps={4}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{marginBottom:"26px"}}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('gender')}</InputLabel>
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) =><FormControl fullWidth>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        {...register("gender", { required: "gender is required" })}
                                    >
                                        <MenuItem value={'male'}>Male</MenuItem>
                                        <MenuItem value={'female'}>Female</MenuItem>
                                    </Select>
                                    </FormControl>
                                    }
                                />
                                {errors.gender?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studylevel')}</InputLabel>
                    <Controller
                    name="level"
                    control={control}
                    render={({ field }) =>
                    <RadioGroup {...register("level", { required: "level Address is required" })}>
                        <FormControlLabel value="1" control={<Radio size="2px"/>} label="Junior"/>
                        <FormControlLabel value="2" control={<Radio size="2px"/>} label="Elementary" />
                    </RadioGroup>}
                    />
                    {errors.level?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studyYear')}</InputLabel>
                    <Controller
                    name="class"
                    control={control}
                    render={({ field }) =>
                    <RadioGroup {...register("class", { required: "class Address is required" })}>
                        <FormControlLabel value="1" control={<Radio size="2px"/>} label="First Year"/>
                        <FormControlLabel value="2" control={<Radio size="2px"/>} label="Second Year" />
                    </RadioGroup>}
                    />
                    {errors.class?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studyCurriculum')}</InputLabel>
                    <Controller
                    name="level"
                    control={control}
                    render={({ field }) =>
                    <RadioGroup {...register("curriculum", { required: "curriculum Address is required" })}>
                        <FormControlLabel value="1" control={<Radio size="2px"/>} label="American curriculum"/>
                        <FormControlLabel value="2" control={<Radio size="2px"/>} label="IG -curriculum" />
                    </RadioGroup>}
                    />
                    {errors.curriculum?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Button variant='contained' color="secondary" fullWidth type='submit'
                    sx={{textTransform:"capitalize"}}>Save</Button>
                    </form>
                </Paper>
            </Container>
        </Navbar>
    )
}
