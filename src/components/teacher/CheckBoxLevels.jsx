import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Box, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLevels } from '../../hooks/useLevels';
import Cookies from 'js-cookie';


export default function CheckBoxLevels({checked,setChecked}) {
    const {t} = useTranslation()
    const {teacher} = useSelector((state)=>state.teacher);
    const {data} = useLevels();
    const lang = Cookies.get("i18next") || "en";

    const handleToggle = (value) => () => {
        const currentIndex = checked.findIndex(l => l.LevelId === value )
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push({LevelId:value , TeacherId:teacher.id});
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Box sx={{marginBottom:"26px"}}>
        <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('preferlevelStudents')}</InputLabel>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {data?.data.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value.id}`;
            return (
            <ListItem
                key={value.id}
                secondaryAction={
                <Checkbox
                    size='2px'
                    edge="end"
                    onChange={handleToggle(value.id)}
                    checked={checked.findIndex(l => l.LevelId === value.id ) !== -1}
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