import React from 'react';
import { FaCheck } from 'react-icons/fa';
import '../styles/genres.css';

interface GenreProps {
    text: string;
    isActive: boolean;

    onClick: () => void;
}

export const Genres: React.FC<GenreProps> = ({
    text,
    isActive = false,
    onClick,
}) => {
    return (
        <div
            className={`check-container ${isActive ? 'active-filter' : ''}`}
            onClick={onClick}
        >
            <input type='checkbox'  />
            <label >
                {isActive ? <FaCheck className='checked' /> : null}
                {text}
            </label>
        </div>
    );
};
