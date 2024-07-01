import { useDragControls, Reorder } from 'framer-motion';
import { useAppDispatch } from '../../../hooks/redux';
import Button, { ButtonTheme, ButtonSize } from '../../../shared/ui/Button/Button';
import { Icon } from '../../../shared/ui/Icon/Icon';
import ReorderIcon from '../../../shared/ui/Icon/ReorderIcon';
import Tag from '../../../shared/ui/Tag/Tag';
import { removeNote } from '../model/NoteAction';
import { NoteItemProps } from '../model/types';

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
            <div
                className={`${className} w-[290px] 1fr p-4 border-[1px] bg-bgc border-line rounded-xl relative`}
            >
                <p className="mb-8 m-1 text-text">{content}</p>
                {Array.isArray(tags) && tags.length > 0 && (
                    <Tag className="absolute bottom-0 left-0 m-2" color={tags[0]} />
                )}
                <ReorderIcon
                    className="absolute top-0 right-0 m-2 text-layout"
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
