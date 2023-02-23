import { Autocomplete, Box, TextField, Paper, Typography, Grid, Button } from '@mui/material'
import React, { useState } from 'react'

export default function HeaderSearchList() {
    const subjects = [{name:"Algebra",id:1},{name:"Calculas",id:2},{name:"Chemistry",id:3}]
    const levels = [{name:"beginner",id:1},{name:"eliemnetary",id:2}]

    /** handle level */
    const defaultProps = {
        options: levels,
        getOptionLabel: (option) => option.name,
        };

    return (
        <Paper sx={{padding:"32px 24px"}}>
            <Grid container spacing={3} alignItems="center">
            <Grid item xs={5}>
                <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                    <TextField {...params} label="search a subject" variant="standard" />
                )}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                        <TextField {...params} label="search a level" variant="standard" />
                    )}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button variant='contained' color="secondary" 
                    sx={{textTransform:"capitalize"}}>Find an expert</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
