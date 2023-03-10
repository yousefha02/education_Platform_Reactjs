import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel,Accordion,AccordionSummary,AccordionDetails } from '@mui/material';
import Cookies from 'js-cookie';

export default function CheckBoxSubjects({subject,choseCategories,setChosenCategories}) {

    const handleToggle = (value) => () => {
        const currentIndex = choseCategories.indexOf(value);
        const newChecked = [...choseCategories];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }
        setChosenCategories(newChecked);
    };

    const lang = Cookies.get("i18next") || "en";

    return (
        <Accordion sx={{marginBottom:"26px"}}>
        <AccordionSummary>
            <InputLabel sx={{fontSize:"14px"}}>{lang==="en"?subject.titleEN:subject.titleAR}</InputLabel>
        </AccordionSummary>
        <AccordionDetails>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',display:"flex" }}>
            {subject.Subjects.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value.id}`;
                return (
                <ListItem
                    sx={{width:"fit-content"}}
                    key={value.id}
                    secondaryAction={
                    <Checkbox
                        size='2px'
                        edge="end"
                        onChange={handleToggle(value)}
                        checked={choseCategories.indexOf(value) !== -1}
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                    }
                    disablePadding
                >
                    <ListItemButton>
                        <ListItemText id={labelId} primary={lang==="en"?value.titleEN:value.titleAR} sx={{textAlign:"start"}}/>
                    </ListItemButton>
                </ListItem>
                );
            })}
            </List>
        </AccordionDetails>
        </Accordion>
    );
}