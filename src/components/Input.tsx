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
            <label className="block text-gray-700 font-bold mb-2">{title}</label>
            <div className="">
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    className="appearance-none border rounded-xl w-full p-2 text-gray-700 focus:outline-none"
                />
            </div>
        </div>
    );
};

export default Input;
