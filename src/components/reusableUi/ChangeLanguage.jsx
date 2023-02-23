import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';
import { IconButton, Menu, MenuItem } from '@mui/material';
export default function ChangeLanguage() {
    const navigate = useNavigate()
    const languages=[
        {
            code:"en",
            name:"English",
            country_code:"gb"
        },
        {
            code:"ar",
            name:"العربية",
            country_code:"sa",
            dir:"rtl"
        }
    ]
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClose = (code) => {
    i18next.changeLanguage(code);
    navigate(0)
    }

    const outClick=()=>{
        setAnchorEl(null);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <IconButton sx={{color:"white"}} onClick={handleClick}>
                <PublicIcon/>
            </IconButton>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={outClick}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            >
            {
                languages.map(lang=>{
                return <MenuItem onClick={()=>handleClose(lang.code)} key={lang.name}>{lang.name}</MenuItem>
                })
            }
            </Menu>
        </>
    )
}
