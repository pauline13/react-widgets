import { useTranslation } from 'react-i18next';

export enum TagType {
    HIGH_PRIORITY = 'high_priority',
    MEDIUM_PRIORITY = 'medium_priority',
    LOW_PRIORITY = 'low_priority',
}

const tagColors = {
    [TagType.HIGH_PRIORITY]: 'bg-error',
    [TagType.MEDIUM_PRIORITY]: 'bg-warn',
    [TagType.LOW_PRIORITY]: 'bg-success',
};

export const TagTypeText = {
    [TagType.HIGH_PRIORITY]: 'High',
    [TagType.MEDIUM_PRIORITY]: 'Medium',
    [TagType.LOW_PRIORITY]: 'Low',
};

interface TagProps {
    className?: string;
    color: TagType;
    text?: keyof typeof TagTypeText;
}

const Tag = ({ className, color, text }: TagProps) => {
    const { t } = useTranslation('notes');
    const tagColorClass = tagColors[color] || tagColors[TagType.LOW_PRIORITY];

    return (
        <div
            className={`${className} ${tagColorClass} h-6 w-6 rounded-xl flex justify-center`}
        >
            <p className="text-white">{text}</p>
        </div>
    );
};

export default Tag;
