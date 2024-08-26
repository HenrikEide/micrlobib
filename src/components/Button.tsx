import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const getButtonClasses = (variant: string, size: string, disabled: boolean) => {
  const baseClasses = 'rounded-3xl';

  const variantClasses: { [key: string]: string } = {
    primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
    outline: 'bg-transparent border border-red-500 text-white-500 hover:bg-red-600 focus:ring-red-500',
  };

  const sizeClasses: { [key: string]: string } = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:shadow-md';

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`;
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
      className={getButtonClasses(variant, size, disabled)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
