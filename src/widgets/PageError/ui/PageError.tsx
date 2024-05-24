import { Link } from 'react-router-dom';
import Button, { ButtonTheme } from '../../../shared/ui/Button/Button';
import { RoutePath } from '../../../shared/routeConfig/routeConfig';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        location.reload();
    };
    return (
        <div
            className={`${className} w-100 h-screen flex items-center justify-center flex-col gap-2`}
        >
            <p>Произошла непредвиденная ошибка</p>
            <div className="flex gap-2">
                <Button className="p-2" theme={ButtonTheme.DELETE} onClick={reloadPage}>
                    Обновить страницу
                </Button>
                <Button className="p-2" theme={ButtonTheme.ADD}>
                    <Link to={RoutePath.home}>Вернуться домой</Link>
                </Button>
            </div>
        </div>
    );
};

export default PageError;
