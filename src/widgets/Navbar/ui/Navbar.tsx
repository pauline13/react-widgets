import { Link } from 'react-router-dom';
import { RoutePath } from '../../../shared/routeConfig/routeConfig';
import ThemeSwitcher from '../../../shared/ui/ThemeSwitcher/ThemeSwitcher';

const Navbar = () => {
    return (
        <nav className="w-[250px] m-2 rounded-xl z-10 bg-bgc text-text">
            <div className="flex flex-col justify-between items-center pt-2">
                <Link to={RoutePath.home} className="font-bold hover:text-primary">
                    Mini-Widgets
                </Link>
                <div className="flex flex-col">
                    <Link to={RoutePath.home} className="hover:text-primary">
                        Home
                    </Link>
                    <Link to={RoutePath.notes} className="hover:text-primary">
                        Notes
                    </Link>
                    <Link to={RoutePath.pokemons} className="hover:text-primary">
                        Pokemon
                    </Link>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
