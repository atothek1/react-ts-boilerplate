import React from "react";
import { RedirectProps, RouteComponentProps, RouteProps } from "react-router";
import { LocationDescriptor } from "history";

export type RouteType = "route" | "redirect";
export interface RouteConfig extends Omit<RedirectProps, "to" | "path">, Pick<RouteProps, "path" | "exact"> {
    readonly id: string;
    readonly component?: React.ComponentType<RouteTargetProps>;
    readonly to?: LocationDescriptor;
    readonly type?: RouteType;
}

export interface RouteTargetProps<TParams = unknown> extends RouteComponentProps<TParams> {
    readonly id: string;
}
