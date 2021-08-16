import { Home } from "@pages";
import { RouteConfig } from "@typings";

export function getRoutes(): RouteConfig[] {
    return [
        {
            id: "routes:app:home",
            path:"/home",
            exact: true,
            component: Home
        },
        {
            id: "redirects:app:fallback",
            type: "redirect",
            to: "/home"
        },
    ];
}
