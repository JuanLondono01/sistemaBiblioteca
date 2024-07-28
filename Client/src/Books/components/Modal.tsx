import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import BasicSelect, { BasicTextFields } from './Input';
import Stack from '@mui/material/Stack';
import { BasicButtons } from './Button';
import { BooksAPI } from '../helpers/BooksAPI';

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

export const BasicModal: React.FC<openModal> = ({ open, onClose }) => {
    const [BookData, setBookData] = useState<AddBook>();

    interface AddBook {
        title: string;
        author: string;
        editorial: string;
        publishedDate: Date;
        isb: string;
        genre: string;
        availability: boolean;
    }

    const { addBook } = BooksAPI();

    return (
        <div>
            <Modal
                open={open}
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
                    <form action=''>
                        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                            <BasicTextFields label='Title' />
                            <BasicTextFields label='Author' />
                            <BasicTextFields label='Editorial' />
                            <BasicTextFields label='Isbn' />
                            <BasicSelect />
                        </Typography>
                        <Stack spacing={2} direction='row' marginTop={3}>
                            <BasicButtons variant='contained' text='Add book' />

                            <BasicButtons
                                variant='outlined'
                                text='Cancel'
                                onClose={onClose}
                            />
                        </Stack>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};
