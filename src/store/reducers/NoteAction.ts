import { createAction } from '@reduxjs/toolkit';
import { INote } from '../../types/INote';
import { TagType } from '../../components/Tags/Tag';

export const loadNotes = createAction('note/loadNotes');
export const addNote = createAction<INote>('note/addNote');
export const removeNote = createAction<number>('note/removeNote');
export const errorNote = createAction<string>('note/errorNote');

export const addTagToNote = createAction<{ noteId: number; tag: TagType }>(
    'note/addTagToNote',
);
export const removeTagFromNote = createAction<{ noteId: number; tag: TagType }>(
    'note/removeTagFromNote',
);

export const loadNotesFromLocalStorage = (): INote[] | undefined => {
    try {
        const notes = localStorage.getItem('note');
        if (notes) {
            return JSON.parse(notes);
        }
    } catch (error) {
        console.log('Не подгружается из local storage', error);
    }
    return undefined;
};
