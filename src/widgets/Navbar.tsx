import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full h-[60px] z-10 shadow-md bg-gray-800 text-white min-w-[375px]">
            <div className="flex justify-between items-center w-full h-full px-5 sm:px-10 md:px-30">
                <Link to={'/'} className="font-bold hover:text-blue-300">
                    Mini-Widgets
                </Link>
                <div className="flex justify-end space-x-4 sm:space-x-5">
                    <Link to={'/'} className="hover:text-blue-300">
                        Home
                    </Link>
                    <Link to={'/notes'} className="hover:text-blue-300">
                        Notes
                    </Link>
                    <Link to={'/poke'} className="hover:text-blue-300">
                        Pokemon
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
