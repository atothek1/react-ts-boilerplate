import React from "react";
import { render } from "react-dom";
import { getRootElement } from "@utils";
import { App } from "@components";
import { getRoutes } from "@res";

render(
    <App
        name={ __NAME__ }
        version={ __VERSION__ }
        environment={ __ENVIRONMENT__ }
        routes={ getRoutes() }
    />,
    getRootElement(),
);
