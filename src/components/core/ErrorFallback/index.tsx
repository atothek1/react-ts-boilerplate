import { FallbackProps } from "react-error-boundary";
import React from "react";

export function ErrorFallback( props: FallbackProps ){
    const formattedMessage = props.error.name + ":" + props.error.message;
    return (
        <div>
            <h2>Runtime error:</h2>
            <p>{ formattedMessage }</p>
            <pre>{ props.error.stack }</pre>
        </div>
    );
}
