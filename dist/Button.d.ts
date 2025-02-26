import React from 'react';
import './Button.css';
interface ButtonProps {
    text: string;
    link: string;
    bgColor: string;
    textColor: string;
    variant?: 'sm' | 'md' | 'lg';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
