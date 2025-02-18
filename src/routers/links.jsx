import { lazy } from "react";
import { EMPLOYEES, OVERVIEW, PROJECTS } from "./paths";
import { LAYOUT_TYPES } from "../constants/routesAndLayouts";

// ========== OVERVIEW ========== 
const OverView = lazy(() => import("@modules/overView/pages/OverView"));

// ========== EMPLOYEES ==========
const Employees = lazy(() => import("@modules/Employees/pages/Employees"));
const ViewDetails = lazy(() => import("@modules/Employees/pages/ViewDetails"));

// ========== PROJECTS ==========
const Projects = lazy(() => import("@modules/projects/pages/Projects"));

export const Links = [

    {
        name: "OverView Page",
        layoutType: LAYOUT_TYPES.sidebar,
        path: OVERVIEW.overView,
        element: <OverView />
    },

    // ========== EMPLOYEES ==========
    {
        name: "Employees Management Page",
        layoutType: LAYOUT_TYPES.sidebar,
        path: EMPLOYEES.employees,
        element: <Employees />
    },
    {
        name: "Employees Details Page",
        layoutType: LAYOUT_TYPES.sidebar,
        path: EMPLOYEES.employees_details,
        element: <ViewDetails />
    },

    // ========== PROJECTS ==========
    {
        name: "Project Management Page",
        layoutType: LAYOUT_TYPES.sidebar,
        path: PROJECTS.project,
        element: <Projects />
    },
]