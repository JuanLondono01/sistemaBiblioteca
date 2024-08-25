// Button.tsx
import Button from '@mui/material/Button';
import React from 'react';

interface BasicButtonsProps {
    variant: 'contained' | 'outlined';
    text: string;
    onClick?: () => void; // Asegúrate de incluir onClick
    type?: 'button' | 'submit' | 'reset'; // Opcional, dependiendo del uso
}

export const BasicButtons: React.FC<BasicButtonsProps> = ({ variant, text, onClick, type }) => {
    return (
        <Button variant={variant} onClick={onClick} type={type}>
            {text}
        </Button>
    );
};
