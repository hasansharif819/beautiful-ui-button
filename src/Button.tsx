import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  link: string;
  bgColor: string;
  textColor: string;
  variant?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ text, link, bgColor, textColor, variant = 'md' }) => {
  const buttonStyles = {
    backgroundColor: bgColor,
    color: textColor,
    padding: variant === 'sm' ? '8px 16px' : variant === 'md' ? '12px 24px' : '16px 32px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: variant === 'sm' ? '14px' : variant === 'md' ? '16px' : '18px',
  };

  return (
    <a href={link} style={buttonStyles} className="beautiful-button">
      {text}
    </a>
  );
};

export default Button;