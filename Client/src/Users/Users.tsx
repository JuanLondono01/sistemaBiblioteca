import { IoIosAddCircleOutline } from 'react-icons/io';
import { UsersAPI } from './helpers/UsersAPI';
import { SearchBar } from '../Global/Components/SearchBar';
import { SideBar } from '../Global/Components/SideBar';
import './styles/users.css';
import { UserBar } from './components/UserBar';
import { useEffect, useState } from 'react';
import { BasicModal } from '../Users/components/Modal';

export const Users = () => {
    type User = {
        _id: string;
        address: string;
        age: number;
        email: string;
        name: string;
        lastname: string;
        phoneNumber: number;
    };

    const [open, setOpen] = useState(false);
    const [UserData, setUserData] = useState<User[]>([]);
    const [userToEdit, setUserToEdit] = useState<User | null>(null);
    const { getUsers, deleteUser } = UsersAPI();

    const handleOpenModal = (user: User | null = null) => {
        setUserToEdit(user);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setUserToEdit(null);
        setOpen(false);
    };

    const fetchUsers = async () => {
        try {
            const userList = await getUsers();
            if (userList) {
                setUserData(userList);
            }
        } catch (error) {
            console.error('Error fetching Users:', error);
        }
    };

    const handleDeleteUser = async (id: string) => {
        try {
            await deleteUser(id);
            setUserData((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

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
                    onClick={() => handleOpenModal()}
                />
                <SearchBar search='User' list='users'/>
            </section>
            <datalist id='users'>
                {
                    UserData.map((user)=>{
                        return(
                            <option>{user.name}</option>
                        )
                    })
                }
            </datalist>

            <section className='users-list'>
                {
                    UserData.length > 0 ? (
                        UserData.map((user) => (
                            <UserBar
                                key={user._id}
                                address={user.address.toUpperCase()}
                                email={user.email.toUpperCase()}
                                name={user.name.toUpperCase()}
                                phone={user.phoneNumber.toString()} // Convertir número a cadena
                                onDelete={() => handleDeleteUser(user._id)}
                                onEdit={() => handleOpenModal(user)}
                            />
                        ))
                    ) :
                    (
                        <p>No users found</p>
                    )
                }
                <BasicModal open={open} onClose={handleCloseModal} user={userToEdit} />
            </section>
        </>
    );
};
