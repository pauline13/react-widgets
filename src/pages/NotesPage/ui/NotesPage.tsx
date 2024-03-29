import { useAppSelector } from '../../../hooks/redux';
import NoteAddNew from '../../../components/Note/NoteAddNew';
import NoteList from '../../../components/Note/NoteList';

const NotesPage = () => {
    const { notes } = useAppSelector(state => state.noteReducer);

    return (
        <div className="h-screen">
            <NoteAddNew />
            <NoteList notes={notes} />
        </div>
    );
};

export default NotesPage;

// валидация для инпута +
// чтобы карточки сохранялись по local_key +
// добавить теги к карточкам и фильтрацию по ним
// добавить загрузку +
// сделать виджет для магниток по API
