import { ChangeEvent, FC } from 'react';
import { Icon } from '../Icon/Icon';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    id: string;
    isChecked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = (props) => {
    const { className, label, isChecked, id, onChange } = props;

    return (
        <div className={`${className} flex items-center`}>
            <div className="relative flex justify-center items-center w-5 h-5 select-none">
                <input
                    type="checkbox"
                    id={id}
                    checked={isChecked}
                    onChange={onChange}
                    className={`appearance-none w-full h-full rounded-md cursor-pointer 
                border border-line checked:bg-primary checked:border-transparent`}
                />
                {isChecked && <Icon name="done" className="absolute text-white" />}
            </div>

            {label && (
                <label htmlFor={id} className="ml-2 cursor-pointer">
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox;
