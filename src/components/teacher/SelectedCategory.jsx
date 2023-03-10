import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Cookies from 'js-cookie';
export default function SelectedCategory({categ,onClick}) {
    const lang = Cookies.get("i18next") || "en";
    return (
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginY:"8px"}}
        onClick={onClick}>
            <Typography sx={{fontSize:"13px"}}>{lang==="en"?categ.titleEN:categ.titleAR}</Typography>
            <Button color="error" sx={{minWidth:"0px"}}><DeleteIcon sx={{fontSize:"18px"}}/></Button>
        </Box>
    )
}
