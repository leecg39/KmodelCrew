
import React, { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'large' | 'medium' | 'small';
    loading?: boolean;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    className = '',
    variant = 'primary',
    size = 'medium',
    loading = false,
    fullWidth = false,
    children,
    disabled,
    leftIcon,
    rightIcon,
    ...props
}, ref) => {

    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-accent text-primary hover:bg-accent-light active:bg-[#B89855] focus:ring-2 focus:ring-accent focus:ring-offset-2',
        secondary: 'bg-primary text-white hover:bg-gray-800 active:bg-gray-900 focus:ring-2 focus:ring-primary focus:ring-offset-2',
        outline: 'border border-primary text-primary bg-transparent hover:bg-gray-50 active:bg-gray-100 focus:ring-2 focus:ring-primary focus:ring-offset-2',
        ghost: 'bg-transparent text-primary hover:bg-gray-100 active:bg-gray-200 focus:ring-2 focus:ring-primary focus:ring-offset-2',
    };

    const sizes = {
        large: 'h-14 px-8 text-lg',
        medium: 'h-12 px-6 text-base',
        small: 'h-10 px-4 text-sm',
    };

    const widthStyle = fullWidth ? 'w-full' : 'w-auto';

    return (
        <button
            ref={ref}
            className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${widthStyle} 
        ${className}
      `}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
            {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
