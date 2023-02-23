import { Paper, Typography,Box, Grid } from '@mui/material'
import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function ResumeSingleTeacher() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function item()
    {
        return(
            <Grid container spacing={2}>
                <Grid item xs={4}>2010-2014</Grid>
                <Grid item xs={8}>الجامعة اللبنانية فرع العلوم</Grid>
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
                    <TabPanel value="1">{item()}</TabPanel>
                    <TabPanel value="2">{item()}</TabPanel>
                    <TabPanel value="3">{item()}</TabPanel>
                </TabContext>
            </Box>
        </Paper>
    )
}
