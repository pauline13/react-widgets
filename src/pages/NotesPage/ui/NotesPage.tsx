import { useAppSelector } from '../../../hooks/redux';
import NoteAddNew from '../../../features/notes/ui/NoteAddNew';
import NoteList from '../../../features/notes/ui/NoteList';

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
