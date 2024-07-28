import Button, { ButtonProps } from '@mui/material/Button';

interface ButtonVariant {
    variant: ButtonProps['variant'];
    onClose?: () => void;
    text: string;
}

export const BasicButtons: React.FC<ButtonVariant> = ({
    variant,
    text,
    onClose,
}) => {
    return (
        <Button variant={variant} onClick={onClose}>
            {text}
        </Button>
    );
};
