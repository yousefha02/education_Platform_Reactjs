import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React from 'react'
import AddStudyLevel from '../../components/admin/AddStudyLevel';
import AdminLayout from '../../components/admin/AdminLayout'
import StudyLevels from '../../components/admin/StudyLevels';
import { useTranslation } from 'react-i18next';

export default function AdminLevels() {
    const {t} = useTranslation()
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <AdminLayout>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label={t('studylevels')} value="1" />
                        <Tab label={t('addStudyLevel')} value="2" />
                    </TabList>
                </Box>
                    <TabPanel value="1"><StudyLevels/></TabPanel>
                    <TabPanel value="2"><AddStudyLevel/></TabPanel>
                </TabContext>
        </AdminLayout>
    )
}
