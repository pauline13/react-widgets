import { Link } from 'react-router-dom';
import { RoutePath } from '../../../shared/routeConfig/routeConfig';
import ThemeSwitcher from '../../../shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Icon } from '../../../shared/ui/Icon/Icon';

const Navbar = () => {
    return (
        <div className="fixed h-[calc(100%-2rem)] flex flex-col w-[250px] rounded-xl z-10 bg-bgc text-text justify-between">
            <div>
                <div className="text-center font-bold pt-4">
                    <Link to={RoutePath.home} className="hover:text-primary">
                        Mini-Widgets
                    </Link>
                </div>
                <div className="flex flex-col pt-2">
                    <Link
                        to={RoutePath.home}
                        className="flex items-center space-x-2 px-4 py-2 hover:text-primary"
                    >
                        <Icon name="home" />
                        <span>Home</span>
                    </Link>
                    <Link
                        to={RoutePath.notes}
                        className="flex items-center space-x-2 px-4 py-2 hover:text-primary"
                    >
                        <Icon name="text_snippet" />
                        <span>Notes</span>
                    </Link>
                    <Link
                        to={RoutePath.pokemons}
                        className="flex items-center space-x-2 px-4 py-2 hover:text-primary"
                    >
                        <Icon name="pets" />
                        <span>Pokemon</span>
                    </Link>
                </div>
            </div>
            <div className="p-4">
                <ThemeSwitcher className="" />
            </div>
        </div>
    );
};

export default Navbar;
