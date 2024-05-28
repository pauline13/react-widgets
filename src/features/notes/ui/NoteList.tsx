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

    if (notes.length > 0) {
        return (
            <div>
                <Reorder.Group values={items} onReorder={setItems}>
                    <div className="">
                        {items.map((note) => (
                            <NoteItem className="m-4 ml-0" key={note.id} note={note} />
                        ))}
                    </div>
                </Reorder.Group>
            </div>
        );
    } else {
        return <div>No notes available</div>;
    }
};

export default NoteList;
