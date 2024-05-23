import { TagType } from '../components/Tag';

export interface INote {
    id: number;
    content: string;
    tags?: TagType[];
}
