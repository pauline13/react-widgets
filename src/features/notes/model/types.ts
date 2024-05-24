import { TagType } from '../../../shared/ui/Tag/Tag';

export interface INote {
    id: number;
    content: string;
    tags?: TagType[];
}
