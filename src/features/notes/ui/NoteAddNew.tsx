import Button, { ButtonTheme } from '../../../shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { noteActions } from '../model/NoteSlice';
import { useState } from 'react';
import { TagType, TagTypeText } from '../../../shared/ui/Tag/Tag';
import Input from '../../../shared/ui/Input/Input';
import { INote } from '../model/types';

const NoteAddNew = () => {
    const { addNote } = noteActions;
    const dispatch = useAppDispatch();

    const error = useAppSelector((state) => state.noteReducer.error);

    const [note, setNote] = useState('');
    const [tagPriority, setTagPriority] = useState(TagType.LOW_PRIORITY);

    const handleNoteChange = (value: string) => {
        setNote(value);
    };

    const handleAddNote = () => {
        const newNote: INote = {
            id: Date.now(),
            content: note,
            tags: [tagPriority],
        };

        dispatch(addNote(newNote));
        setNote('');
        setTagPriority(TagType.LOW_PRIORITY);
    };

    const handleTagPriority = (priority: TagType) => {
        if (Object.values(TagType).includes(priority)) {
            setTagPriority(priority);
        }
    };

    return (
        <div className="max-w-[288px] min-w-[250px] mb-4">
            <Input
                title="Новая заметка"
                placeholder="Введите описание заметки"
                value={note}
                onChange={handleNoteChange}
            />
            <p>Установите приоритет задачи</p>
            {Object.values(TagType).map((priority: TagType) => (
                <div key={priority} className="pt-1">
                    <input
                        className="mr-2 "
                        type="checkbox"
                        id={priority}
                        checked={tagPriority === priority}
                        onChange={() => handleTagPriority(priority)}
                    />
                    <label htmlFor={priority}>{TagTypeText[priority]}</label>
                </div>
            ))}
            {error && <span className="pt-1 text-xs text-red-500">{error}</span>}

            <Button
                onClick={handleAddNote}
                theme={ButtonTheme.ADD}
                className="w-full mt-2"
            >
                Добавить
            </Button>
        </div>
    );
};

export default NoteAddNew;
