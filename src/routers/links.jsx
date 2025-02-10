import { lazy } from "react";
import { EMPLOYEES, OVERVIEW } from "./paths";
import { LAYOUT_TYPES } from "../constants/routesAndLayouts";

const OverView = lazy(() => import("@modules/overView/pages/OverView"));
const Employees = lazy(() => import("@modules/Employees/pages/Employees"));

export const Links = [

    {
        name: "OverView Page",
        layoutType: LAYOUT_TYPES.sidebar,
        path: OVERVIEW.overView,
        element: <OverView />
    },
    {
        name: "Employees Management Page",
        layoutType: LAYOUT_TYPES.sidebar,
        path: EMPLOYEES.employees,
        element: <Employees />
    },
]