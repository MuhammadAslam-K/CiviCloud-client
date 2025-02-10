import { ReactNode } from 'react';
import SideBar from '@components/navigations/MainSideBar';

function SidebarNavbarLayout({ children }: { children: ReactNode }) {
    return (

        <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar with a fixed width */}
            <div className="w-full md:w-72 flex-shrink-0">
                <SideBar />
            </div>

            {/* Content area that takes up the remaining space */}
            <div className="flex flex-col flex-1">
                {children}
            </div>
        </div>


    );
}

export default SidebarNavbarLayout;
