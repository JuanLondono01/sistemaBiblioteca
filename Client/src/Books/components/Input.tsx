import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
    const [genre, setgenre] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setgenre(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Genre</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={genre}
                    label='genre'
                    onChange={handleChange}
                >
                    <MenuItem value={'Terror'}>Terror</MenuItem>
                    <MenuItem value={'Suspenso'}>Suspenso</MenuItem>
                    <MenuItem value={'Accion'}>Accion</MenuItem>
                    <MenuItem value={'Historia'}>Historia</MenuItem>
                    <MenuItem value={'Drama'}>Drama</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

interface InputInfo {
    label: string;
}

export const BasicTextFields: React.FC<InputInfo> = ({ label }) => {
    return (
        <Box component='form' marginBottom={3} noValidate autoComplete='off'>
            <TextField
                id='outlined-basic'
                label={label}
                variant='outlined'
                fullWidth
            />
        </Box>
    );
};
