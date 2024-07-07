import { CiEdit, CiTrash } from 'react-icons/ci';
import '../styles/loancard.css';

interface LoanProps {
    user: string;
    book: string;
}

export const LoanCard: React.FC<LoanProps> = ({ user, book }) => {
    return (
        <>
            <div className='loan-container'>
                <section className='loan-user'>
                    <h4>{user}</h4>
                </section>
                <section className='loan-book'>
                    <h4>{book}</h4>
                </section>
                <section className='loan-opts'>
                    <CiEdit size={25} color='blue' className='opt' />
                    <CiTrash size={25} color='red' className='opt' />
                </section>
            </div>
        </>
    );
};
