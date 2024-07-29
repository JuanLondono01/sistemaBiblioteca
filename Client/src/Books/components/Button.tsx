import Button, { ButtonProps } from '@mui/material/Button';

interface ButtonVariant {
    variant: ButtonProps['variant'];
    onClose?: () => void;
    text: string;
    type?: 'button' | 'submit' | 'reset';
}

export const BasicButtons: React.FC<ButtonVariant> = ({
    variant,
    text,
    onClose,
    type
}) => {
    return (
        <Button variant={variant} onClick={onClose} type={type}>
            {text}
        </Button>
    );
};
