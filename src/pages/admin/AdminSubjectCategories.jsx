import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { useTranslation } from 'react-i18next';
import AddCategory from '../../components/admin/AddCategory';
import SubjectsCategories from '../../components/admin/SubjectsCategories';

export default function AdminSubjectCategories() {
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
                        <Tab label={t('categories')} value="1" />
                        <Tab label={t('addCategory')} value="2" />
                    </TabList>
                </Box>
                    <TabPanel value="1"><SubjectsCategories/></TabPanel>
                    <TabPanel value="2"><AddCategory/></TabPanel>
                </TabContext>
        </AdminLayout>
    )
}