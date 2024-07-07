import { IoIosAddCircleOutline } from 'react-icons/io';
import { SearchBar } from '../Global/Components/SearchBar';
import { SideBar } from '../Global/Components/SideBar';
import { LoanCard } from './components/LoanCard';
import './styles/Loans.css'


export const Loans = () => {
    return (
        <>
            <SideBar
                activeBooks={false}
                activeUsers={false}
                activeLoans={true}
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
                <SearchBar search='Loan' list='loans' />
            </section>

            <datalist id='loans' className='hello'>
                <option></option>
                <option>wasd</option>
                <option>jilk</option>
            </datalist>

            <section className='loans-list'>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            <LoanCard book='Moby Dick' user='Random user'/>
            </section>
        </>
    );
};
