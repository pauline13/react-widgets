import Button, { ButtonTheme } from '../../../shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { noteActions } from '../model/NoteSlice';
import { useState } from 'react';
import { TagType } from '../../../shared/ui/Tag/Tag';
import Input from '../../../shared/ui/Input/Input';
import { INote } from '../model/types';
import { useTranslation } from 'react-i18next';

const NoteAddNew = () => {
    const { t } = useTranslation('notes');
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
        <div className="max-w-[288px] min-w-[250px] text-text mb-4">
            <Input
                title={`${t('Новая заметка')}`}
                placeholder={`${t('Описание заметки')}`}
                value={note}
                onChange={handleNoteChange}
            />
            <p>{t('Приоритет задачи')}</p>
            {Object.values(TagType).map((priority: TagType) => (
                <div key={priority} className="pt-1">
                    <input
                        className="mr-2 "
                        type="checkbox"
                        id={priority}
                        checked={tagPriority === priority}
                        onChange={() => handleTagPriority(priority)}
                    />
                    <label htmlFor={priority}>{t(`tagTypeText.${priority}`)}</label>
                </div>
            ))}
            {error && <span className="pt-1 text-xs text-error">{error}</span>}

            <Button
                onClick={handleAddNote}
                theme={ButtonTheme.ADD}
                className="w-full mt-2"
            >
                {t('Добавить')}
            </Button>
        </div>
    );
};

export default NoteAddNew;
