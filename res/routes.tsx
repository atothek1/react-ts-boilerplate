import { Home } from "@pages";
import { RouteConfig } from "@typings";

export function getRoutes(): RouteConfig[] {
    return [
        {
            id: "home",
            path:"/home",
            exact: true,
            component: Home
        },
        {
            id: "redirects:fallback",
            type: "redirect",
            to: "/home"
        },
    ];
}
