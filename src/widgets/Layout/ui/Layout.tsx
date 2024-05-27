import { ReactNode } from 'react';
import Navbar from '../../Navbar/ui/Navbar';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex min-h-screen bg-layout">
            <Navbar />
            <div className="flex-grow p-4 sm:px-10 md:px-30">{children}</div>
        </div>
    );
};

export default Layout;
