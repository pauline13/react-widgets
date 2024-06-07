import { TagType } from '../../../shared/ui/Tag/Tag';

export interface INote {
    id: number;
    content: string;
    tags?: TagType[];
}

export interface NoteListProps {
    notes: INote[];
}

export interface NoteItemProps {
    note: INote;
    className?: string;
}
