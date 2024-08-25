import '../styles/search.css';
import { IoIosSearch } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
interface searchProps {
    search: string;
    list?: string;
    value?: string;
    inSearch?: boolean;
    deleteText?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<searchProps> = ({
    search,
    list,
    onChange,
    value,
    deleteText,
    inSearch,
}) => {
    return (
        <>
            <div className='search-container'>
                <input
                    type='text'
                    placeholder={`Search ${search}`}
                    onChange={onChange}
                    value={value}
                    className='search-bar'
                    list={list}
                />
                {inSearch ? (
                    <IoIosClose
                        className='close-icon'
                        size={20}
                        onClick={deleteText}
                        color='gray'
                    />
                ) : (
                    <IoIosSearch
                        className='search-icon'
                        size={20}
                        color='gray'
                    />
                )}
            </div>
        </>
    );
};
