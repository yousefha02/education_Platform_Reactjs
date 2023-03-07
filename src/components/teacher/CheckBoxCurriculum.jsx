import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Box, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCurriculums } from '../../hooks/useCurriculums';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';


export default function CheckBoxCurriculum({checked , setChecked}) {
    const {t} = useTranslation()
    const {data} = useCurriculums();
    const lang = Cookies.get("i18next") || "en";
    const {teacher} = useSelector((state)=>state.teacher);
    // console.log(data);

    const handleToggle = (value) => () => {
        const currentIndex = checked.findIndex(l => l.CurriculumId === value ) ;
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push({CurriculumId:value  , TeacherId:teacher.id});
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Box sx={{marginBottom:"26px"}}>
        <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('WhichCurriculum')}</InputLabel>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {data?.data.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value.id+"knejd"}`;
            return (
            <ListItem
                key={value.id+"kjn"}
                secondaryAction={
                <Checkbox
                    size='2px'
                    edge="end"
                    onChange={handleToggle(value.id)}
                    checked={checked.findIndex(l => l.CurriculumId === value.id ) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                />
                }
                disablePadding
            >
                <ListItemButton>
                <ListItemText id={labelId} primary={lang === "en" ? value.titleEN : value.titleAR} sx={{textAlign:"start"}}/>
                </ListItemButton>
            </ListItem>
            );
        })}
        </List>
        </Box>
    );
}