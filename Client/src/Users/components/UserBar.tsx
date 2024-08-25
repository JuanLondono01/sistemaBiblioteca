

import { CiEdit, CiTrash } from 'react-icons/ci';
import '../styles/list.css' 


interface userData {
    name: string;
    email: string;
    phone: string;
    address: string;
    onDelete: ()=> void;
    onEdit: ()=> void;
}

export const UserBar: React.FC<userData> = ({ name, email, phone, address, onDelete, onEdit }) => {
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
                <CiEdit size={25} color='blue' className='opt' onClick={onEdit}/>
                <CiTrash size={25} color='red' className='opt'  onClick={onDelete}/>
                </section>
            </div>
        </>
    );
};
