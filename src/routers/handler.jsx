import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Links } from "./links";
import SidebarNavbarLayout from "../layouts/SidebarNavbarLayout"; // Import your layout component


const Layouts = {
    sidebar: SidebarNavbarLayout,
};

export default function Routers() {

    const userAndAdminRouters = [...Links];

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
