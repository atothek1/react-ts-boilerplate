import React, { useCallback } from "react";
import { Redirect, Route, RouteComponentProps } from "react-router";
import { Switch } from "react-router-dom";
import invariant from "tiny-invariant";
import { RouteConfig } from "@typings";

interface RoutingProps {
    readonly routes: RouteConfig[];
}
export function Routing( props: RoutingProps ) {
    const { routes } = props;

    const getRoute = useCallback( ( config: RouteConfig )=> {
        const { id, component, ...rest } = config;
        // manual assign instead of spread assign, as component can be undefined and enforcing with non-null ! assignment
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const Comp = component!;
        const renderer = ( props: RouteComponentProps ) => ( <Comp id={ id } { ...props } /> );
        return <Route key={ id } { ...rest } render={ renderer }/>;
    }, [] );

    const elements = routes.map( ( route ) => {
        const { id, to, type = "route" } = route;

        if( __IS_DEVELOPMENT__ ) {
            invariant( !( type === "redirect" && to === undefined ), `The provided config '${ id }' is of type 'redirect' but has an undefined 'to' property.` );
        }

        if( type === "route" ) {
            return getRoute( route );
        } else if( type === "redirect" ){
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return <Redirect key={ id } to={ to! } />;
        }
        return null;
    } );

    return (
        <Switch>
            { elements }
        </Switch>
    );
}
