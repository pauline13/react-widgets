import { fireEvent, render, screen } from '@testing-library/react';
import NoteItem from './NoteItem';
import * as reduxHooks from 'react-redux';
import * as actions from '../../notes/model/NoteAction';
import { TagType } from '../../../shared/ui/Tag/Tag';
import { Reorder } from 'framer-motion';

jest.mock('react-redux');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('NoteItem', () => {
    const mockedNote = {
        id: 1,
        content: 'Test Note',
        tags: ['tag1' as TagType],
    };
    const mockedDefaultProps = {
        className: '',
        note: mockedNote,
    };

    test('should create NoteItem', () => {
        render(
            <Reorder.Group
                values={[mockedNote]}
                onReorder={() => {
                    null;
                }}
            >
                <NoteItem {...mockedDefaultProps} />
            </Reorder.Group>,
        );
        expect(screen.getByText('Test Note')).toBeInTheDocument();
    });

    test('should render the tag', () => {
        render(
            <Reorder.Group
                values={[mockedNote]}
                onReorder={() => {
                    null;
                }}
            >
                <NoteItem {...mockedDefaultProps} />
            </Reorder.Group>,
        );

        const tagElement = screen.getByTestId('tag-element');
        expect(tagElement).toBeInTheDocument();
    });

    test('should call removeNote action when delete button is clicked', () => {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);

        const mockRemoveNoteItem = jest.spyOn(actions, 'removeNote');

        render(
            <Reorder.Group
                values={[mockedNote]}
                onReorder={() => {
                    null;
                }}
            >
                <NoteItem {...mockedDefaultProps} />
            </Reorder.Group>,
        );

        fireEvent.click(screen.getByRole('button'));

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockRemoveNoteItem).toHaveBeenCalledWith(1);
    });
});
