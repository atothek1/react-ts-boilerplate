const { resolve } = require( "path" );
module.exports = ( ( packagePath ) => {
    return {
        rootDir: packagePath,
        verbose: true,
        collectCoverage: true,
        testRegex: "(/__tests__/.*)\\.(spec)\\.(ts|tsx)$",
        testEnvironment: "jsdom",
        setupFilesAfterEnv: [ "@testing-library/jest-dom/extend-expect" ],
        transform: {
            "\\.[jt]sx?$": [ "babel-jest", { configFile: "./config/babel.config.js" } ],
        },
        transformIgnorePatterns: [
            "<rootDir>/node_modules/(?!lodash-es)"
        ],
        collectCoverageFrom: [
            "**/res/**/*.ts",
            "**/res/**/*.tsx",
            "**/src/**/*.ts",
            "**/src/**/*.tsx",
        ],
        coveragePathIgnorePatterns: [
            "(/__mocks__/.*)\\.(ts|tsx)$",
            "(/__tests__/.*)\\.(spec)\\.(ts|tsx)$",
            "global.d.ts",
        ],
        moduleFileExtensions: [
            "ts",
            "tsx",
            "js",
            "jsx",
            "json",
        ],
        moduleNameMapper: {
            "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/staticfiles.mock.js",
            "@components/(.*)": "<rootDir>/src/components/$1",
            "@containers/(.*)": "<rootDir>/src/containers/$1",
            "@pages/(.*)": "<rootDir>/src/pages/$1",
            "@services/(.*)": "<rootDir>/src/services/$1",
            "@store/(.*)": "<rootDir>/src/store/$1",
            "@typings/(.*)": "<rootDir>/src/typings/$1",
            "@utils": "<rootDir>/src/utils/index.ts",
            "@utils/(.*)": "<rootDir>/src/utils/$1",
            "@res/(.*)": "<rootDir>/res/$1",
            "@mocks/(.*)": "<rootDir>/__mocks__/$1",
        },
        globals: {
            __ENVIRONMENT__: "production",
            __IS_DEVELOPMENT__: false,
            __IS_PRODUCTION__: true,
            __NAME__: "test-name",
            __VERSION__: "1.0.0-test",
        },
        coverageReporters: [
            "lcov",
            "html",
        ],
        testURL: "https://test.com",
    };
} )( resolve( __dirname, ".." ) );
