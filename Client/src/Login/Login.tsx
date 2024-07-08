import './styles/login.css';

export const Login = () => {
    return (
        <>
            <h1>Sistema Biblioteca</h1>

            <form method='post' className='log-form'>
                <div>
                    <label htmlFor='user'>User</label> 
                    <input name='user' type='text' placeholder='User'/>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input name='password' type='password' placeholder='Password'/>
                </div>
                <button type='submit'>Sign In</button>
            </form>
        </>
    );
};
