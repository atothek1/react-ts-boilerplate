export function getRootElement(): HTMLElement {
    let node = document.getElementById( "root" );
    if ( node === null ) {
        node = document.createElement( "div" );
        node.setAttribute( "id", "root" );
        node = document.body.appendChild( node );
    }
    return node;
}

export function getPortalElementById( id = "default-portal" ): HTMLElement {
    let node = document.getElementById( id );
    if ( node === null ) {
        node = document.createElement( "div" );
        node.setAttribute( "id", id );
        node = document.body.appendChild( node );
    }
    return node;
}

export function scrollToElement( element: HTMLElement, offset = 0 ): void {
    const { top: currentY } = element.getBoundingClientRect();
    const top = currentY + window.pageYOffset + offset;
    window.scrollTo( {
        top,
        behavior: "smooth"
    } );
}
