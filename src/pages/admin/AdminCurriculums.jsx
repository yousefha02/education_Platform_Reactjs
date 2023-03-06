import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { useTranslation } from 'react-i18next';
import AddStudyCurriculums from '../../components/admin/AddStudyCurriculums';
import StudyCurriculums from '../../components/admin/StudyCurriculums';

export default function AdminCurriculums() {
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
                        <Tab label={t('studycurriculums')} value="1" />
                        <Tab label={t('addstudycurriculum')} value="2" />
                    </TabList>
                </Box>
                    <TabPanel value="1"><StudyCurriculums/></TabPanel>
                    <TabPanel value="2"><AddStudyCurriculums/></TabPanel>
                </TabContext>
        </AdminLayout>
    )
}