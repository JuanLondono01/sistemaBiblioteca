import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { BasicSelect, BasicTextFields } from './Input';
import Stack from '@mui/material/Stack';
import { BasicButtons } from './Button';
import { BooksAPI } from '../helpers/BooksAPI';
import { SelectChangeEvent } from '@mui/material';

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

interface AddBook {
    title: string;
    author: string;
    editorial: string;
    publishedDate?: Date;
    isbn: string;
    genre: string;
    availability: boolean;
}

export const BasicModal: React.FC<openModal> = ({ open, onClose }) => {
    const [BookData, setBookData] = useState<AddBook>({
        title: '',
        author: '',
        editorial: '',
        isbn: '',
        genre: '',
        availability: true,
        publishedDate: new Date(),
    });

    const { addBook } = BooksAPI();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBookData((prevBookData) => ({
            ...prevBookData,
            [name]: value,
        }));
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target;
        setBookData((prevFormData) => ({
            ...prevFormData,
            [name]: value as string,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await addBook(BookData);
            if (result) {
                alert('Book added successfully');
                setBookData({
                    title: '',
                    author: '',
                    editorial: '',
                    isbn: '',
                    genre: '',
                    availability: true,
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
                        Add a new Book
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit}>
                        <Box sx={{ mt: 2 }}>
                            <BasicTextFields
                                name='title'
                                value={BookData.title}
                                onChange={handleChange}
                                label='Title'
                            />
                            <BasicTextFields
                                name='author'
                                value={BookData.author}
                                onChange={handleChange}
                                label='Author'
                            />
                            <BasicTextFields
                                name='editorial'
                                value={BookData.editorial}
                                onChange={handleChange}
                                label='Editorial'
                            />
                            <BasicTextFields
                                name='isbn'
                                value={BookData.isbn}
                                onChange={handleChange}
                                label='ISBN'
                            />
                            <BasicSelect
                                name='genre'
                                value={BookData.genre}
                                onChange={handleSelectChange}
                            />
                        </Box>
                        <Stack spacing={2} direction='row' marginTop={3}>
                            <BasicButtons
                                variant='contained'
                                text='Add book'
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
