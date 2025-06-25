export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}