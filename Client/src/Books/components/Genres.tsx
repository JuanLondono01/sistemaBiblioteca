import React from 'react';
import { FaCheck } from 'react-icons/fa';
import '../styles/genres.css';

interface GenreProps {
    text: string;
    isActive: boolean;
    name: string;
    onClick: () => void;
}

export const Genres: React.FC<GenreProps> = ({
    text,
    isActive = false,
    name,
    onClick,
}) => {
    return (
        <div
            className={`check-container ${isActive ? 'active-filter' : ''}`}
            onClick={onClick}
        >
            <input type='checkbox' name={name}/>
            <label>
                {isActive ? <FaCheck className='checked' /> : null}
                {text}
            </label>
        </div>
    );
};
