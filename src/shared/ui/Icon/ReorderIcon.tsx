import { DragControls } from 'framer-motion';
import { Icon } from './Icon';

interface Props {
    dragControls: DragControls;
    className?: string;
}
const ReorderIcon = ({ dragControls, className }: Props) => {
    return (
        <span
            className={`${className} cursor-grab active:cursor-grabbing select-none`}
            onPointerDown={(e) => dragControls.start(e)}
        >
            <Icon name="drag_indicator" />
        </span>
    );
};

export default ReorderIcon;
