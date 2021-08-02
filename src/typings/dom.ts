export type Direction =
    | "none"
    | "up"
    | "right"
    | "down"
    | "left";

export interface ScrollInfo {
    readonly y: number;
    readonly x: number;
    readonly direction: Direction;
}
