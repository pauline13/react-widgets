import { TagType } from '../components/Tags/Tag';

export interface INote {
    id: number;
    content: string;
    tags?: TagType[];
}
