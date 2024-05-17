import Button, { ButtonSize, ButtonTheme } from '../Button';
import { Icon } from '../Icon';
import { INote } from '../../types/INote';
import { removeNote } from '../../store/reducers/NoteAction';
import { useAppDispatch } from '../../hooks/redux';
import Tag from '../Tags/Tag';

interface NoteItemProps {
    className?: string;
}

const NoteItem = (props: INote & NoteItemProps) => {
    const { id, content, className, tags } = props;

    const dispatch = useAppDispatch();

    const handleRemoveNote = () => {
        dispatch(removeNote(id));
    };

    return (
        <div className={`${className} 1fr p-4 bg-orange-200 rounded-xl relative`}>
            <p className="pb-7 ">{content}</p>
            {Array.isArray(tags) && tags.length > 0 && (
                <Tag className="absolute bottom-0 left-0 m-2" color={tags[0]} />
            )}
            <div className="bottom-0 right-0 absolute m-2">
                <Button
                    onClick={handleRemoveNote}
                    theme={ButtonTheme.DELETE}
                    size={ButtonSize.S}
                >
                    <Icon name="delete" />
                </Button>
            </div>
        </div>
    );
};

export default NoteItem;
