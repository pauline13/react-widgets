import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen ">
            <Navigation />
            <div className="flex-grow p-4 sm:px-10 md:px-30">{children}</div>
        </div>
    );
};

export default Layout;
