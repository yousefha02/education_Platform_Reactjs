import { Box, Paper, Tab } from '@mui/material'
import React from 'react'
import StudentLayout from '../../components/student/StudentLayout'
import { TabContext, TabList, TabPanel } from '@mui/lab'

export default function StudentLessons() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <StudentLayout>
            <Paper sx={{padding:"20px"}}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Coming lessons" value="1" />
                        <Tab label="Waiting lessons" value="2" />
                        <Tab label="Past lessons" value="3" />
                        <Tab label="All lessons" value="4" />
                    </TabList>
                </Box>
                    <TabPanel value="1"></TabPanel>
                    <TabPanel value="2"></TabPanel>
                    <TabPanel value="3"></TabPanel>
                    <TabPanel value="4"></TabPanel>
            </TabContext>
            </Paper>
        </StudentLayout>
    )
}
