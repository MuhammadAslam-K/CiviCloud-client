import { lazy } from "react";
import { OVERVIEW } from "./paths";
import { LAYOUT_TYPES } from "../constant/routesAndLayouts";

const OverView = lazy(() => import("@modules/overView/pages/OverView"));

export const Links = [

    {
        name: "OverView Page",
        layoutType: LAYOUT_TYPES.sidebar,
        path: OVERVIEW.overView,
        element: <OverView />
    },
]