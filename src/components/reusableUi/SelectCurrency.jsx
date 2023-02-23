import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import currencies from '../../data/currencies'

    export default function SelectCurrency() {
    const [currency, setCurrency] = React.useState('JOD');

    const handleChange = (e) => {
        setCurrency(e.target.value)
    };

    return (
        <div className='currency'>
        <FormControl sx={{ m: 1, width: 100 }}>
            <Select
            variant='standard'
            sx={{color:"white",
            "& .MuiSvgIcon-root": {
                color: "white",
                fontSize:"15px"
            }}}
            displayEmpty
            value={currency}
            onChange={handleChange}
            >
            {currencies.map((name) => (
                <MenuItem
                key={name.title}
                value={name.title}
                >
                {name.title}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </div>
    );
}