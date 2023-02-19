import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Box, InputLabel } from '@mui/material';

export default function CheckBoxCurriculum() {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Box sx={{marginBottom:"26px"}}>
        <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>Which Curriculum you teach? you can select more than one.</InputLabel>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {["IG -curriculum","International Baccalaureate IB","French Baccalaureate -curriculum"].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
            <ListItem
                key={value}
                secondaryAction={
                <Checkbox
                    size='2px'
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                />
                }
                disablePadding
            >
                <ListItemButton>
                <ListItemText id={labelId} primary={value} sx={{textAlign:"start"}}/>
                </ListItemButton>
            </ListItem>
            );
        })}
        </List>
        </Box>
    );
}