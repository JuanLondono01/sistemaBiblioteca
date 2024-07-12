import { IoIosAddCircleOutline } from 'react-icons/io';
import { SearchBar } from '../Global/Components/SearchBar';
import { SideBar } from '../Global/Components/SideBar';
import './styles/users.css';
import { UserBar } from './components/UserBar';

export const Users = () => {
    return (
        <>
            <SideBar
                activeBooks={false}
                activeUsers={true}
                activeLoans={false}
                activeSettings={false}
            />
            <h1>Sistema Biblioteca</h1>

            <h2>Users</h2>

            <section className='search-sect'>
                <IoIosAddCircleOutline
                    size={30}
                    color='gray'
                    className='add-book'
                />
                <SearchBar search='User' list='users' />
            </section>
            <datalist id='users' className='hello'>
                <option>qwerty</option>
                <option>wasd</option>
                <option>jilk</option>
            </datalist>
            <section className='users-list'>
                <UserBar
                    name='Random user 1'
                    address='Random address'
                    email='randomEmail@email.com'
                    phone='123-456-789'
                />
                <UserBar
                    name='Random user 1'
                    address='Random address'
                    email='randomEmail@email.com'
                    phone='123-456-789'
                />
                <UserBar
                    name='Random user 1'
                    address='Random address'
                    email='randomEmail@email.com'
                    phone='123-456-789'
                />
                <UserBar
                    name='Random user 1'
                    address='Random address'
                    email='randomEmail@email.com'
                    phone='123-456-789'
                />
                <UserBar
                    name='Random user 1'
                    address='Random address'
                    email='randomEmail@email.com'
                    phone='123-456-789'
                />
                <UserBar
                    name='Random user 1'
                    address='Random address'
                    email='randomEmail@email.com'
                    phone='123-456-789'
                />
            </section>
        </>
    );
};
