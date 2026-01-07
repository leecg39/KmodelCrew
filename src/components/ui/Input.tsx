
import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    helpText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    helpText,
    className = '',
    type = 'text',
    onChange,
    ...props
}, ref) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === 'tel') {
            // Auto-format for Korean phone numbers
            let value = e.target.value.replace(/[^0-9]/g, '');
            if (value.length > 11) value = value.slice(0, 11);

            if (value.length < 4) {
                // less than 4 digits, just value
            } else if (value.length < 7) {
                value = `${value.slice(0, 3)}-${value.slice(3)}`;
            } else if (value.length < 11) {
                value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
            } else {
                value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
            }
            e.target.value = value;
        }

        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className="w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">
                {label} {props.required && <span className="text-accent">*</span>}
            </label>
            <input
                ref={ref}
                type={type}
                className={`
          w-full h-14 px-4 border outline-none transition-all rounded-sm
          ${error
                        ? 'border-error focus:border-error focus:ring-1 focus:ring-error'
                        : 'border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent'}
          disabled:bg-gray-100 disabled:text-gray-500
          ${className}
        `}
                onChange={handleChange}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-error">{error}</p>}
            {!error && helpText && <p className="mt-1 text-sm text-gray-500">{helpText}</p>}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
