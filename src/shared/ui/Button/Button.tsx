import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export enum ButtonTheme {
    ADD = 'add',
    DELETE = 'delete',
    OUTLINE = 'outline',
    FILL = 'fill',
}

export enum ButtonSize {
    S = 'small',
    M = 'medium',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    size?: ButtonSize;
    children?: ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({
    theme,
    size,
    children,
    className,
    ...otherProps
}: ButtonProps) => {
    const themeClasses = {
        [ButtonTheme.ADD]: 'bg-success text-white',
        [ButtonTheme.DELETE]: 'bg-error text-white',
        [ButtonTheme.OUTLINE]: 'bg-none outline outline-1 outline-line text-text',
        [ButtonTheme.FILL]: 'bg-line text-bg',
    };

    const themeClass = theme ? themeClasses[theme] : '';

    const sizeClasses = {
        [ButtonSize.S]: 'min-w-[2rem] rounded-full',
        [ButtonSize.M]: 'min-w-[6rem]',
    };

    const sizeClass = size ? sizeClasses[size] : '';

    return (
        <button
            className={`${className} flex items-center justify-center text-text 
        p-1 rounded-xl ${sizeClass} ${themeClass} 
        hover:bg-opacity-500 active:bg-opacity-60`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
