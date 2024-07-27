import { useState } from 'react';
import { loginAdmin, FormData } from './helpers/authHelper';
import './styles/login.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        user: '',
        password: '',
    });
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await loginAdmin(formData);

        if (result.success) {
            // Almacena el token en localStorage
            localStorage.setItem('token', result.token!);

            setShowErrorAlert(false);
            setError('');
            navigate('/books');
            console.log('Login successful');
        } else {
            setShowErrorAlert(true);
            setError(result.error || 'Unknown error');
            console.error(result.error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    return (
        <>
            <h1>Sistema Biblioteca</h1>

            <form method='post' className='log-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='user'>User</label>
                    <input
                        name='user'
                        type='text'
                        placeholder='User'
                        value={formData.user}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Sign In</button>
                {showErrorAlert && <p>Error: {error}</p>}
            </form>
        </>
    );
};
