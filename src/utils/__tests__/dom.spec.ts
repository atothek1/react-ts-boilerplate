import { getPortalElementById, getRootElement } from "@utils";

describe( "@utils/dom", () => {
    describe( "getRootElement()", () => {
        it( "should create <div id='root'> element and return it.", () => {
            const id = "root";
            expect( document.getElementById( id ) ).toBeNull();
            const actual = getRootElement();
            expect( document.getElementById( id ) ).not.toBeNull();
            expect( actual ).not.toBeNull();
            expect( actual ).toBeInstanceOf( HTMLDivElement );
        } );

        it( "should return existing <div id='root'> element.", () => {
            const id = "root";
            let expected = document.createElement( "div" );
            expected.setAttribute( "id", id );
            document.body.appendChild( expected );
            expected = document.getElementById( id ) as HTMLDivElement;

            const actual = getRootElement();
            expect( actual ).not.toBeNull();
            expect( actual ).toBeInstanceOf( HTMLDivElement );
            expect( actual ).toBe( expected );
        } );

    } );

    describe( "getPortalElementById()", () => {
        it( "should create <div id='default-portal'> element and return it.", () => {
            const id = "default-portal";
            expect( document.getElementById( id ) ).toBeNull();
            const actual = getPortalElementById();
            expect( document.getElementById( id ) ).not.toBeNull();
            expect( actual ).not.toBeNull();
            expect( actual ).toBeInstanceOf( HTMLDivElement );
        } );

        it( "should return existing <div id='portal'> element.", () => {
            const id = "portal";
            let expected = document.createElement( "div" );
            expected.setAttribute( "id", id );
            document.body.appendChild( expected );
            expected = document.getElementById( id ) as HTMLDivElement;

            const actual = getPortalElementById( id );
            expect( actual ).not.toBeNull();
            expect( actual ).toBeInstanceOf( HTMLDivElement );
            expect( actual ).toBe( expected );
        } );
    } );
} );
