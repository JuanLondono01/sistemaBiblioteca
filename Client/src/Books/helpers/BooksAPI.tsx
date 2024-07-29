import { login } from '../../Global/helpers/axios';
    interface BookData {
        title: string;
        author: string;
    }

export const BooksAPI = () => {
    const getBooks = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await login.get('/api/books', {
                headers: {
                    auth: token ,
                    'Content-Type': 'application/json',
                },
            });
            return response.data
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };


    const addBook = async (data: BookData) => {
        const token = localStorage.getItem('token');
        try {
            if (token) {
                const response = await login.post('/api/books', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        auth: `${token}`,
                    },
                });
                return response.data;
            } else {
                console.log('No token provided');
            }
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return{
        getBooks,
        addBook
    }
};
