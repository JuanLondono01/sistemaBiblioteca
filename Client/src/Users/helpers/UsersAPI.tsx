import { login } from '../../Global/helpers/axios';

interface UserData {
    name: string;
    lastname: string;
    age: number;
    phoneNumber: number;
    email: string;
    address: string;
}
export const UsersAPI = () => {
    const getUsers = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await login.get('/api/users', {
                headers: {
                    auth: token,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };
    const deleteUser = async (id: string) => {
        const token = localStorage.getItem('token');
        try {
            const response = await login.delete(`/api/users/${id}`, {
                headers: {
                    auth: token,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const addUser = async (data: UserData) => {
        const token = localStorage.getItem('token');
        try {
            const response = await login.post('/api/users', data, {
                headers: {
                    auth: token,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const editUser = async (id: string, data: UserData)=>{
        const token = localStorage.getItem('token')
        try {
            const response = await login.put(`api/users/${id}`, data,{
                headers:{
                    auth: token,
                    'Content-Type' : 'application/json'
                }
            });
            return response.data
        } catch (error) {
            console.error('Error editing user:', error);
        }
    }

    return {
        getUsers,
        deleteUser,
        addUser,
        editUser
    };
};
