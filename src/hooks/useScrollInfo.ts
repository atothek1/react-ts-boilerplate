import { Direction, ScrollInfo } from "@typings";
import { throttle } from "lodash-es";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useScrollInfo( time = 0 ): ScrollInfo {

    const getScrollOffset = useCallback(
        ( direction: "y" | "x" ) => {
            return direction === "y" ? window.pageYOffset : window.pageXOffset;
        },
        []
    );
    const getDirection = useCallback(
        ( { y, x }: ScrollInfo ): Direction => {
            const yOffset = getScrollOffset( "y" );
            const xOffset = getScrollOffset( "x" );

            if (
                y !== undefined &&
                x !== undefined &&
                yOffset !== undefined &&
                xOffset !== undefined
            ) {
                if ( y > yOffset ) return "up";
                if ( y < yOffset ) return "down";
                if ( x > xOffset ) return "left";
                if ( x < xOffset ) return "right";
            }
            return "none";
        },
        [ getScrollOffset ]
    );

    const [ scrollInfo, setScrollInfo ] = useState<ScrollInfo>( {
        y: getScrollOffset( "y" ),
        x: getScrollOffset( "x" ),
        direction: "none"
    } );

    const updateScrollInfoState = useCallback( () => {
        setScrollInfo( prev => ( {
            y: getScrollOffset( "y" ),
            x: getScrollOffset( "x" ),
            direction: getDirection( prev )
        } ) );
    }, [ getScrollOffset, getDirection ] );


    const handleScroll: () => void = useMemo( () => {
        if( time > 0 ) {
            return throttle( () => updateScrollInfoState(), time );
        }
        return updateScrollInfoState;
    },
    [ time, updateScrollInfoState ]
    );

    useEffect( () => {
        window.addEventListener( "scroll", handleScroll );
        return () => window.removeEventListener( "scroll", handleScroll );
    }, [ handleScroll ] );

    return scrollInfo;
}
