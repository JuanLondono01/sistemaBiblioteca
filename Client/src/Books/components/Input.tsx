import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface BasicSelectProps {
    name: string;
    value: string;
    onChange: (event: SelectChangeEvent) => void;
}

export const BasicSelect: React.FC<BasicSelectProps> = ({name, onChange, value}) => {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Genre</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    name={name}
                    value={value}
                    label='genre'
                    onChange={onChange}
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
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BasicTextFields: React.FC<InputInfo> = ({
    label,
    name,
    onChange,
    value,
}) => {
    return (
        <Box marginBottom={3}>
            <TextField
                id='outlined-basic'
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                variant='outlined'
                fullWidth
            />
        </Box>
    );
};
