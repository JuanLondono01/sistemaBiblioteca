import React from 'react';
import { FaCheck } from 'react-icons/fa';
import '../styles/genres.css';

interface GenreProps {
    text: string;
    isActive: boolean;
    genre: string;
    onClick: () => void;
}

export const Genres: React.FC<GenreProps> = ({
    text,
    isActive = false,
    genre,
    onClick,
}) => {
    return (
        <div
            className={`check-container ${isActive ? 'active-filter' : ''}`}
            onClick={onClick}
        >
            <input type='checkbox' id={genre} checked={isActive} />
            <label htmlFor={genre}>
                {isActive ? <FaCheck className='checked' /> : null}
                {text}
            </label>
        </div>
    );
};
