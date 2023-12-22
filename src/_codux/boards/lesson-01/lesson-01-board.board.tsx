import { createBoard } from '@wixc3/react-board';
import { Lesson01 } from '../../../components/lessons/01/lesson-01';

export default createBoard({
    name: '01 Lets Start!',
    Board: () => <Lesson01 />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
    isSnippet: true,
});
