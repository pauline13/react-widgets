import NoteAddNew from '@/features/notes/ui/NoteAddNew';
import NoteList from '@/features/notes/ui/NoteList';
import { useAppSelector } from '@/hooks/redux';

const NotesPage = () => {
    const { notes } = useAppSelector((state) => state.noteReducer);

    return (
        <div className="">
            <NoteAddNew />
            <NoteList notes={notes} />
        </div>
    );
};

export default NotesPage;
