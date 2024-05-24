interface IconProps {
    className?: string;
    name: string;
}

export const Icon = ({ name, className }: IconProps) => {
    return <span className={`${className} material-icons-round`}>{name}</span>;
};
