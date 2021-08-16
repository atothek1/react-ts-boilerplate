import { GlobalStyles } from "@components/core/GlobalStyles";
import React, { StrictMode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import type { RouteConfig } from "@typings";
import { ErrorFallback, Routing } from "@components";

interface AppProps {
    readonly name: string;
    readonly version: string;
    readonly environment: string;
    readonly routes: RouteConfig[];
}

export function App( props: AppProps ) {
    const { name, version, environment, routes } = props;

    if( __IS_DEVELOPMENT__ ) {
        console.log( `Starting app: "${ name }" v${ version }; env: ${ environment }` );
    }

    return (
        <StrictMode>
            <ErrorBoundary FallbackComponent={ ErrorFallback }>
                <GlobalStyles />
                <Router>
                    <Routing routes={ routes } />
                </Router>
            </ErrorBoundary>
        </StrictMode>
    );
}
