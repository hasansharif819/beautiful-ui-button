import React from 'react';
import './Button.css';
const Button = ({ text, link, bgColor, textColor, variant = 'md' }) => {
    const buttonStyles = {
        backgroundColor: bgColor,
        color: textColor,
        padding: variant === 'sm' ? '8px 16px' : variant === 'md' ? '12px 24px' : '16px 32px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: variant === 'sm' ? '14px' : variant === 'md' ? '16px' : '18px',
    };
    return (React.createElement("a", { href: link, style: buttonStyles, className: "beautiful-button" }, text));
};
export default Button;
