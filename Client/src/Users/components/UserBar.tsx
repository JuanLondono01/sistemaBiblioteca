

import { CiEdit, CiTrash } from 'react-icons/ci';
import '../styles/list.css' 


interface userData {
    name: string;
    email: string;
    phone: string;
    address: string;
}

export const UserBar: React.FC<userData> = ({ name, email, phone, address }) => {
    return (
        <>
            <div className='user-container'>
                    <h4>{name}</h4>
                <section className='user-info'>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                </section>
                <section className='user-opts'>
                <CiEdit size={25} color='blue' className='opt'/>
                <CiTrash size={25} color='red' className='opt'/>
                </section>
            </div>
        </>
    );
};
