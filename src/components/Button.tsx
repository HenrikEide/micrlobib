import React from 'react';
import './Button.css'; // Import the CSS file

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const getButtonClasses = ({ variant, size, disabled }: ButtonProps) => {
  const baseClasses = 'button-base';

  const variantClasses = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    outline: 'button-outline',
  }[variant];

  const sizeClasses = {
    small: 'button-small',
    medium: 'button-medium',
    large: 'button-large',
  }[size];

  const disabledClasses = disabled ? 'button-disabled' : 'button-enabled';

  return `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses}`;
};

export default function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={getButtonClasses({ variant, size, disabled, children })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
