import { Reorder } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NoteListProps } from '../model/types';
import NoteItem from './NoteItem';

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
