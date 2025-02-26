import React from 'react';
import './Button.css';

// Define base props
interface BaseButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  variant?: 'sm' | 'md' | 'lg';
}

// Define props for a button (without a link)
interface ButtonProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  link?: never; // Ensure link is not provided
}

// Define props for an anchor (with a link)
interface AnchorButtonProps extends BaseButtonProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string; // Ensure link is provided
}

// Combine the two types
type Props = ButtonProps | AnchorButtonProps;

const Button: React.FC<Props> = ({
  text,
  link,
  bgColor = '#007BFF', // Default background color
  textColor = '#FFFFFF', // Default text color
  variant = 'md', // Default variant
  ...rest // Spread remaining props
}) => {
  const buttonStyles = {
    backgroundColor: bgColor,
    color: textColor,
    padding: variant === 'sm' ? '8px 16px' : variant === 'md' ? '12px 24px' : '16px 32px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: variant === 'sm' ? '14px' : variant === 'md' ? '16px' : '18px',
  };

  // If a link is provided, render an anchor tag
  if (link) {
    return (
      <a
        href={link}
        style={buttonStyles}
        className="beautiful-button"
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)} // Cast to anchor props
      >
        {text}
      </a>
    );
  }

  // Otherwise, render a button
  return (
    <button
      style={buttonStyles}
      className="beautiful-button"
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)} // Cast to button props
    >
      {text}
    </button>
  );
};

export default Button;