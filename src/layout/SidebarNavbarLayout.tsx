import { ReactNode } from 'react';
import SideBar from '@components/navigations/MainSideBar';

function SidebarNavbarLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <SideBar />

            <div className="flex flex-col flex-1 w-full">
                {children}
            </div>
        </div>
    );
}

export default SidebarNavbarLayout;
