import { Box ,Button,FormControl,Grid, InputLabel, MenuItem, Select} from '@mui/material'
import React, { useState } from 'react'
import languages from '../../data/languages' 

const levels = ['Beginner','Intermediate','Intermediate High','Advanced','Native']

export default function AddLanguages() {
    const [chosenlanguages,setChosenLanguages] = useState([])

    function addNewLanguage()
    {
        setChosenLanguages(back=>[...back,{language:"Arabic",level:"Beginner",id:chosenlanguages.length+1}])
    }

    function handleChangeLevel(id,level)
    {
        setChosenLanguages(back=>back.map(lang=>
        {
            return lang.id===id?{...lang,level:level}:lang
        }))
    }

    function handleChangeLanguage(id,language)
    {
        setChosenLanguages(back=>back.map(lang=>
        {
            return lang.id===id?{...lang,language:language}:lang
        }))
    }

    return (
        <Box sx={{marginBottom:"26px"}}>
            <Grid container spacing={4}>
                <Grid item xs={5}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Languages spoken</InputLabel>
                </Grid>
                <Grid item xs={5}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Level</InputLabel>
                </Grid>
            </Grid>
            {
                chosenlanguages.map((language,index)=>
                {
                    return(
                        <Grid container key={index+'po1'} spacing={4} sx={{marginBottom:"20px"}}>
                            <Grid item xs={5}>
                                <FormControl fullWidth>
                                    <Select value={language.language}
                                    onChange={(e)=>handleChangeLanguage(language.id,e.target.value)}>
                                        {
                                            languages.map((lang,index)=>
                                            {
                                                return(
                                                    <MenuItem key={index+'a1'} value={lang}>{lang}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={5}>
                                <FormControl fullWidth>
                                    <Select value={language.level} 
                                    onChange={(e)=>handleChangeLevel(language.id,e.target.value)}>
                                        {
                                            levels.map((level,index)=>
                                            {
                                                return(
                                                    <MenuItem key={index+'a2'} value={level}>{level}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid> 
                    )
                })
            }
            <Button sx={{fontSize:"12px",marginTop:"4px"}} color="secondary"
            onClick={addNewLanguage}>Add another language</Button>
        </Box>
    )
}