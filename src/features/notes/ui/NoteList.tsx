import { Reorder } from 'framer-motion';
import NoteItem from './NoteItem';
import { useEffect, useState } from 'react';
import { INote } from '../model/types';

interface NoteListProps {
    notes: INote[];
}

const NoteList = ({ notes }: NoteListProps) => {
    const [items, setItems] = useState(notes);

    useEffect(() => {
        setItems(notes);
    }, [notes]);

    useEffect(() => {
        console.log(
            'Initial items:',
            items.map((item) => item.id),
        );
    }, [items]);

    if (notes.length > 0) {
        return (
            <Reorder.Group values={items} onReorder={setItems}>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {items.map((note) => (
                        <NoteItem key={note.id} note={note} />
                    ))}
                </div>
            </Reorder.Group>
        );
    } else {
        return <div>No notes available</div>;
    }
};

export default NoteList;
