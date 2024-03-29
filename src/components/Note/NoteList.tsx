import { INote } from '../../models/INote';
import NoteItem from './NoteItem';

interface NoteListProps {
    notes: INote[];
}

const NoteList = ({ notes }: NoteListProps) => {
    if (notes.length > 0) {
        return (
            <div className="grid gap-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
                {notes.map((note: INote) => (
                    <NoteItem className="" key={note.id} {...note} />
                ))}
            </div>
        );
    } else {
        return <div>No notes available</div>;
    }
};

export default NoteList;
