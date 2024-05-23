import Button, { ButtonSize, ButtonTheme } from '../Button';
import { Icon } from '../Icon';
import { INote } from '../../types/INote';
import { removeNote } from '../../store/reducers/NoteAction';
import { useAppDispatch } from '../../hooks/redux';
import Tag from '../Tag';
import { Reorder, useDragControls } from 'framer-motion';
import ReorderIcon from '../ReorderIcon';

interface NoteItemProps {
    note: INote;
    className?: string;
}

const NoteItem = ({ className, note }: NoteItemProps) => {
    const { id, content, tags } = note;

    const dispatch = useAppDispatch();

    const dragControls = useDragControls();

    const handleRemoveNote = () => {
        dispatch(removeNote(id));
    };

    return (
        <Reorder.Item
            value={note}
            dragListener={false}
            dragControls={dragControls}
            layout={true}
            drag={true}
        >
            <div className={`${className} 1fr p-4 bg-orange-200 rounded-xl relative`}>
                <p className="mb-8 m-1">{content}</p>
                {Array.isArray(tags) && tags.length > 0 && (
                    <Tag className="absolute bottom-0 left-0 m-2" color={tags[0]} />
                )}
                <ReorderIcon
                    className="absolute top-0 right-0 m-2 text-white"
                    dragControls={dragControls}
                />
                <div className="absolute bottom-0 right-0 m-2">
                    <Button
                        onClick={handleRemoveNote}
                        theme={ButtonTheme.DELETE}
                        size={ButtonSize.S}
                    >
                        <Icon name="delete" />
                    </Button>
                </div>
            </div>
        </Reorder.Item>
    );
};

export default NoteItem;
