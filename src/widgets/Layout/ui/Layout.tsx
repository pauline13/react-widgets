import Navbar from '@/widgets/Navbar/ui/Navbar';
import { ReactNode } from 'react';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex min-h-screen bg-layout p-4">
            <Navbar />
            <div className="flex-grow ml-[260px]">{children}</div>
        </div>
    );
};

export default Layout;
