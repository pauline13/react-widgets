import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../../shared/routeConfig/routeConfig';
import LanguageSwitcher from '../../../shared/ui/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from '../../../shared/ui/ThemeSwitcher/ThemeSwitcher';

const Navbar = () => {
    const { t } = useTranslation('translation');
    return (
        <div className="fixed h-[calc(100%-2rem)] flex flex-col w-[250px] rounded-xl z-10 bg-bgc text-text justify-between">
            <div>
                <div className="text-center font-bold align-center p-4 border-b-2 border-line">
                    <Link
                        to={RoutePath.home}
                        className="select-none hover:cursor-pointer"
                    >
                        Mini-Widgets
                    </Link>
                </div>
                <div className="flex flex-col pt-4">
                    <Link
                        to={RoutePath.home}
                        className="flex items-center px-4 py-2 hover:bg-line"
                    >
                        <span>{t('Главная страница')}</span>
                    </Link>
                    <Link
                        to={RoutePath.notes}
                        className="flex items-center px-4 py-2 hover:bg-line"
                    >
                        <span>{t('Заметки')}</span>
                    </Link>
                    <Link
                        to={RoutePath.pokemons}
                        className="flex items-center px-4 py-2 hover:bg-line"
                    >
                        <span>{t('Список Покемонов')}</span>
                    </Link>
                </div>
            </div>
            <div className="flex justify-end gap-2 p-4">
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default Navbar;
