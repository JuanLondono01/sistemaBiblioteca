import axios, { AxiosResponse } from 'axios';
import { login } from '../../Global/helpers/axios';

export interface FormData {
    user: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

interface ErrorResponse {
    success: false;
    error: string;
}

export const loginAdmin = async (formData: FormData): Promise<{ success: true, token: string } | ErrorResponse> => {
    try {
        const response: AxiosResponse<LoginResponse> = await login.post('/', formData);

        if (response.status === 200) {
            console.log('Login successful');
            const { token } = response.data;
            localStorage.setItem('token', token)
            return { success: true, token };
        } else if (response.status === 404) {
            console.log('User not found');
            return { success: false, error: 'User not found' };
        } else if (response.status === 401) {
            console.log('Unauthorized');
            return { success: false, error: 'Unauthorized' };
        } else {
            console.log('Unexpected status code:', response.status);
            return { success: false, error: 'Unexpected error' };
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            // Handle Axios-specific errors with response
            console.error('Axios error:', error.response.data);
            return { success: false, error: 'Network error: ' + error.response.data };
        } else {
            // Handle other errors
            console.error('Network error:', error);
            return { success: false, error: 'Network error' };
        }
    }
};
