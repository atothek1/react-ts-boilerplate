import React from "react";
import cn from "classnames";
import { RouteTargetProps } from "@typings";

import styles from "./styles.scss";

type HomeProps = RouteTargetProps;
export function Home( props: HomeProps ) {
    const { id } = props;
    return (
        <div className={ cn( styles.Home ) }>
            <h1>Home</h1>
            <span>
                route id:
                {" "}
                { id }
            </span>
        </div>
    );
}
