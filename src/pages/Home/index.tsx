import React from "react";
import { RouteTargetProps } from "@typings";

type HomeProps = RouteTargetProps;
export function Home( props: HomeProps ) {
    const { id } = props;
    return (
        <>
            <h1>Home</h1>
            <span>
                route id:
                {" "}
                { id }
            </span>
        </>
    );
}
