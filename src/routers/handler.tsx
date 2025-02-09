import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Links } from "./links";
import SidebarNavbarLayout from "../layout/SidebarNavbarLayout"; // Import your layout component

interface RouteType {
    name: string;
    path: string;
    layoutType?: string;
    element: React.ReactNode;
}

const Layouts: Record<string, React.FC<{ children: React.ReactNode }>> = {
    sidebar: SidebarNavbarLayout,
};

export default function Routers() {

    const userAndAdminRouters: RouteType[] = [...Links];

    return (
        <RouterRoutes>
            {userAndAdminRouters.map((route, i) => {
                const Layout = route.layoutType ? Layouts[route.layoutType] || React.Fragment : React.Fragment;
                return (
                    <Route
                        key={i}
                        path={route.path}
                        element={
                            <Layout>
                                {route.element}
                            </Layout>
                        }
                    />
                );
            })}
        </RouterRoutes>
    );
}
