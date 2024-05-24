import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INote } from '../../../types/INote';
import { loadNotesFromLocalStorage } from './NoteAction';
import { TagType } from '../../../shared/ui/Tag/Tag';

interface NoteState {
    notes: INote[];
    isLoading: boolean;
    error: string;
}

const initialState: NoteState = {
    notes: loadNotesFromLocalStorage() || [],
    isLoading: false,
    error: '',
};

const NOTE_LOCALSTORAGE_KEY = 'note';

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        loadNotes(state) {
            state.isLoading = true;
            state.error = '';
        },
        addNote(state, action: PayloadAction<INote>) {
            state.isLoading = false;
            if (action.payload.content.length >= 10) {
                state.error = '';
                state.notes = [...state.notes, action.payload];
                localStorage.setItem(NOTE_LOCALSTORAGE_KEY, JSON.stringify(state.notes));
            } else {
                state.error = 'Мало символов';
            }
        },
        removeNote(state, action: PayloadAction<number>) {
            state.isLoading = false;
            state.error = '';
            state.notes = state.notes.filter((note) => note.id !== action.payload);
            localStorage.setItem(NOTE_LOCALSTORAGE_KEY, JSON.stringify(state.notes));
        },
        errorNote(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        addTagToNote(state, action: PayloadAction<{ noteId: number; tag: TagType }>) {
            state.isLoading = false;
            state.error = '';

            const { noteId, tag } = action.payload;
            const noteToUpdate = state.notes.find((note) => note.id === noteId);
            if (noteToUpdate) {
                if (!noteToUpdate.tags) {
                    noteToUpdate.tags = [];
                }
                if (!noteToUpdate.tags.includes(tag)) {
                    noteToUpdate.tags.push(tag);
                    localStorage.setItem(
                        NOTE_LOCALSTORAGE_KEY,
                        JSON.stringify(state.notes),
                    );
                }
            }
        },
        removeTagFromNote(
            state,
            action: PayloadAction<{ noteId: number; tag: TagType }>,
        ) {
            state.isLoading = false;
            state.error = '';

            const { noteId, tag } = action.payload;
            const noteToUpdate = state.notes.find((note) => note.id === noteId);
            if (noteToUpdate && noteToUpdate.tags) {
                noteToUpdate.tags = noteToUpdate.tags.filter(
                    (existingTag) => existingTag !== tag,
                );
                localStorage.setItem(NOTE_LOCALSTORAGE_KEY, JSON.stringify(state.notes));
            }
        },
    },
});

export default noteSlice.reducer;

export const { actions: noteActions } = noteSlice;
export const { reducer: noteReducers } = noteSlice;
