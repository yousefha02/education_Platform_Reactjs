import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { useTranslation } from 'react-i18next';
import AddCategory from '../../components/admin/AddCategory';
import ParentStudentNew from '../../components/admin/ParentStudentNew';
import ParentStudentFinished from '../../components/admin/ParentStudentFinished';

export default function AdminParentStudent() {
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
                        <Tab label={t('new')} value="1" />
                        <Tab label={t('finished')} value="2" />
                    </TabList>
                </Box>
                    <TabPanel value="1"><ParentStudentNew/></TabPanel>
                    <TabPanel value="2"><ParentStudentFinished/></TabPanel>
                </TabContext>
        </AdminLayout>
    )
}