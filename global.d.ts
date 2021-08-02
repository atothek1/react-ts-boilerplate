// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="./src/types/styled.d" />

// eslint-disable-next-line no-underscore-dangle,@typescript-eslint/naming-convention
declare const __NAME__: string;
// eslint-disable-next-line no-underscore-dangle,@typescript-eslint/naming-convention
declare const __VERSION__: string;
// eslint-disable-next-line no-underscore-dangle,@typescript-eslint/naming-convention
declare const __ENVIRONMENT__: string;
// eslint-disable-next-line no-underscore-dangle,@typescript-eslint/naming-convention
declare const __IS_DEVELOPMENT__: boolean;
// eslint-disable-next-line no-underscore-dangle,@typescript-eslint/naming-convention
declare const __IS_PRODUCTION__: boolean;
// eslint-disable-next-line no-underscore-dangle,@typescript-eslint/naming-convention
declare const __CONFIG__: Config;

declare interface Config {
    readonly title: string;
}

declare interface KeyValuePair<T = unknown> {
    readonly key: string;
    readonly value: T;
}

declare interface Dictionary<T = unknown> {
    readonly [ key: string ]: Readonly<T>;
}

declare interface MutableDictionary<T = unknown> {
    [ key: string ]: T;
}

declare interface TestIdProps {
    readonly testId?: string;
}
