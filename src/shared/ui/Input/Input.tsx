import { InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    title?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const Input = (props: InputProps) => {
    const { title, placeholder, value, onChange, type = 'text' } = props;

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className="w-full">
            <label className="block text-text font-bold mb-2">{title}</label>
            <div className="">
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    className="mb-2 bg-bgc appearance-none border border-line rounded-xl w-full p-2 text-text focus:outline-primary"
                />
            </div>
        </div>
    );
};

export default Input;
