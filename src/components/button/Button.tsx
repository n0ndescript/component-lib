import React from 'react';
import type { ButtonProps } from './Button.types';
import './Button.css';

// Button Component:
// A reusable button component that supports different variants, click handlers, and additional styling.
// Props:
// - variant: Specifies the button style (e.g., 'primary', 'secondary').
// - children: Content inside the button.
// - onClick: Function to handle click events.
// - disabled: Disables the button when true.
// - className: Additional CSS classes for custom styling.
// - type: Specifies the button type (e.g., 'button', 'submit').

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    onClick = () => {},
    disabled = false,
    className = '',
    type = 'button',
}) => {
        const buttonClass = `btn btn-${variant} ${className}`.trim();
        return (
            <button
                className={buttonClass}
                onClick={onClick}
                disabled={disabled}
                type={type}
            >
                {children}
                </button>
        );
    };

/*
        <div class="section">
            <h2 class="section-title">Button Components</h2>
            <button class="btn btn-primary">Primary Button</button>
            <button class="btn btn-secondary">Secondary Button</button>
            <button class="btn btn-success">Success Button</button>
            <button class="btn btn-danger">Danger Button</button>
            <button class="btn btn-outline">Outline Button</button>
        </div>
*/