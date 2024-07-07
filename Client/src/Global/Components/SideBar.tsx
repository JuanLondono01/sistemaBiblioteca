import { LuBook } from 'react-icons/lu';
import { LuUser } from 'react-icons/lu';
import { GoGear } from 'react-icons/go';
import { CiBookmark } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import '../../Global/styles/sidebar.css';
import React from 'react';

interface ButtonProps {
    text: string;
    image: JSX.Element;
    to: string;
    isActive: boolean;
}

interface activeButtons {
    activeBooks: boolean;
    activeUsers: boolean;
    activeLoans: boolean;
    activeSettings: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, image, to, isActive }) => {
    return (
        <Link className={`btn-display `} to={to}>
            <div className={`icon ${isActive ? 'active' : ''}`}>{image}</div>
            <p className='text'>{text}</p>
        </Link>
    );
};

export const SideBar: React.FC<activeButtons> = ({
    activeBooks = false,
    activeUsers = false,
    activeLoans = false,
    activeSettings = false,
}) => {
    return (
        <>
            <div className='sideBar'>
                <div className='content'>
                    <Button
                        text='Books'
                        image={<LuBook size={25} />}
                        to='/Books'
                        isActive={activeBooks}
                    />
                    <Button
                        text='Users'
                        image={<LuUser size={25} />}
                        to='/Users'
                        isActive={activeUsers}
                    />

                    <Button
                        text='Loans'
                        image={<CiBookmark size={25} />}
                        to='/Loans'
                        isActive={activeLoans}
                    />
                    <Button
                        text='Settings'
                        image={<GoGear size={25} />}
                        to='/Loans'
                        isActive={activeSettings}
                    />
                </div>
            </div>
        </>
    );
};
