import { ReactNode } from 'react';

interface PageWrapperProps {
    children: ReactNode;
    className?: string;
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
    return <div className={`${className} h-full bg-bgc rounded-xl p-4`}>{children}</div>;
};

export default PageWrapper;
