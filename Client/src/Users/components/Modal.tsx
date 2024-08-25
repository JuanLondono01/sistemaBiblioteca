import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import {  BasicTextFields } from './Input';
import Stack from '@mui/material/Stack';
import { BasicButtons } from './Button';
import { UsersAPI } from '../helpers/UsersAPI';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface openModal {
    open: boolean;
    onClose: () => void;
}

interface AddUser {
    name: string;
    lastname: string;
    age: number;
    phoneNumber: number;
    email: string;
    address: string;
}

export const BasicModal: React.FC<openModal> = ({ open, onClose }) => {
    const [UserData, setUserData] = useState<AddUser>({
        name: '',
        lastname: '',
        age: 0,
        phoneNumber: 0,
        email: '',
        address: ''

    });

    const { addUser } = UsersAPI();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: name === 'age' || name === 'phoneNumber' ? Number(value) : value,
        }));
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await addUser(UserData);
            if (result) {
                alert('User added successfully');
                setUserData({
                    name: '',
                    lastname: '',
                    age: 0,
                    phoneNumber: 0,
                    email: '',
                    address: ''
                })
                onClose();
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        Add a new User
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit}>
                        <Box sx={{ mt: 2 }}>
                            <BasicTextFields
                                name='name'
                                value={UserData.name}
                                onChange={handleChange}
                                label='Name'
                            />
                            <BasicTextFields
                                name='lastname'
                                value={UserData.lastname}
                                onChange={handleChange}
                                label='Lastname'
                            />
                            <BasicTextFields
                                name='age'
                                value={UserData.age.toString()}
                                type='number'
                                onChange={handleChange}
                                label='Age'
                            />
                            <BasicTextFields
                                name='phoneNumber'
                                value={UserData.phoneNumber.toString()}
                                type='number'
                                onChange={handleChange}
                                label='Phone Number'
                            />
                            <BasicTextFields
                                name='email'
                                value={UserData.email}
                                onChange={handleChange}
                                label='Email'
                            />
                            <BasicTextFields
                                name='address'
                                value={UserData.address}
                                onChange={handleChange}
                                label='Address'
                            />
                        </Box>
                        <Stack spacing={2} direction='row' marginTop={3}>
                            <BasicButtons
                                variant='contained'
                                text='Add User'
                                type='submit'
                            />
                            <BasicButtons
                                variant='outlined'
                                text='Cancel'
                                onClose={onClose}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};
