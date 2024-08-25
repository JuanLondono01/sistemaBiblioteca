import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState, useEffect } from 'react';
import { BasicTextFields } from './Input';
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

interface OpenModalProps {
    open: boolean;
    onClose: () => void;
    user?: {
        _id: string;
        address: string;
        age: number;
        email: string;
        name: string;
        lastname: string;
        phoneNumber: number;
    } | null;
}

export const BasicModal: React.FC<OpenModalProps> = ({ open, onClose, user }) => {
    const [userData, setUserData] = useState({
        name: '',
        lastname: '',
        age: 0,
        phoneNumber: 0,
        email: '',
        address: '',
    });

    const { addUser, editUser } = UsersAPI(); // Asegúrate de que editUser esté definido en UsersAPI

    useEffect(() => {
        if (user) {
            setUserData({
                name: user.name,
                lastname: user.lastname,
                age: user.age,
                phoneNumber: user.phoneNumber,
                email: user.email,
                address: user.address,
            });
        } else {
            // Limpiar los datos del usuario si no hay un usuario
            setUserData({
                name: '',
                lastname: '',
                age: 0,
                phoneNumber: 0,
                email: '',
                address: '',
            });
        }
    }, [user]);

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
            if (user?._id) {
                await editUser(user._id, userData); // Asumiendo que editUser requiere id y los datos
            } else {
                await addUser(userData);
            }
            alert('User saved successfully');
            onClose(); // Cierra el modal
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose} // Cierra el modal al hacer clic fuera de él
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <Typography
                    id='modal-modal-title'
                    variant='h6'
                    component='h2'
                >
                    {user?._id ? 'Edit User' : 'Add a new User'}
                </Typography>
                <Box component='form' onSubmit={handleSubmit}>
                    <Box sx={{ mt: 2 }}>
                        <BasicTextFields
                            name='name'
                            value={userData.name}
                            onChange={handleChange}
                            label='Name'
                        />
                        <BasicTextFields
                            name='lastname'
                            value={userData.lastname}
                            onChange={handleChange}
                            label='Lastname'
                        />
                        <BasicTextFields
                            name='age'
                            value={userData.age.toString()}
                            type='number'
                            onChange={handleChange}
                            label='Age'
                        />
                        <BasicTextFields
                            name='phoneNumber'
                            value={userData.phoneNumber.toString()}
                            type='number'
                            onChange={handleChange}
                            label='Phone Number'
                        />
                        <BasicTextFields
                            name='email'
                            value={userData.email}
                            onChange={handleChange}
                            label='Email'
                        />
                        <BasicTextFields
                            name='address'
                            value={userData.address}
                            onChange={handleChange}
                            label='Address'
                        />
                    </Box>
                    <Stack spacing={2} direction='row' marginTop={3}>
                        <BasicButtons
                            variant='contained'
                            text='Save'
                            type='submit'
                        />
                        <BasicButtons
                            variant='outlined'
                            text='Cancel'
                            onClick={onClose} // Cierra el modal
                        />
                    </Stack>
                </Box>
            </Box>
        </Modal>
    );
};
