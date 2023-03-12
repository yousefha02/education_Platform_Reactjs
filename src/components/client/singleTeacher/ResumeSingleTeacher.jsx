import { Paper, Typography,Box, Grid } from '@mui/material'
import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function ResumeSingleTeacher({teacher}) {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function Item({from,to,name,desc})
    {
        return(
            <Grid container spacing={2}>
                <Grid item xs={4}>{from + '-' + to}</Grid>
                <Grid item xs={8}>{name + " " + desc}</Grid>
            </Grid>
        )
    }

    return (
        <Paper sx={{padding:"32px 24px",marginY:"30px"}}>
            <Typography sx={{fontSize:"22px",marginBottom:"18px"}}>Resume</Typography>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Higher education" value="1" />
                        <Tab label="Work experience" value="2" />
                        <Tab label="Professional certificates" value="3" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">{teacher?.EducationDegrees.length>0&&teacher.EducationDegrees.map(item=><Item from={item.from} to={item.to} name={item.UniversityName} desc={item.degree}/>)}</TabPanel>
                    <TabPanel value="2">{teacher?.Experiences.length>0&&teacher.Experiences.map(item=><Item from={item.from} to={item.to} name={item.jobTitle} desc={item.companyName}/>)}</TabPanel>
                    <TabPanel value="3">{teacher?.Certificates.length>0&&teacher.Certificates.map(item=><Item from={item.from} to={item.to} name={item.name} desc={item.subject}/>)}</TabPanel>
                </TabContext>
            </Box>
        </Paper>
    )
}
