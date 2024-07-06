import { useState } from 'react';
import '../styles/search.css';
import { IoIosSearch } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
interface searchProps {
    search: string;
}

export const SearchBar: React.FC<searchProps> = ({ search }) => {
    const [InSearch, setInSearch] = useState(false);
    const [Search, setSearch] = useState('');

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        setInSearch(value !== '');
    };

    const deleteSearchText = () => {
        setSearch('');
        setInSearch(false);
    };

    return (
        <>
            <div className='search-container'>
                <input
                    type='text'
                    placeholder={`Search ${search}`}
                    onChange={onInputChange}
                    value={Search}
                    className='search-bar'
                />
                {InSearch ? (
                    <IoIosClose
                        className='close-icon'
                        size={20}
                        onClick={deleteSearchText}
						color='gray'
                    />
                ) : (
                    <IoIosSearch className='search-icon' size={20} color='gray' />
                )}
            </div>
        </>
    );
};