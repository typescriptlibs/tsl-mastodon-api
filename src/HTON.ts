/* *
 *
 *  Declarations
 *
 * */

import * as DOM from "domhandler";
import * as HTML from 'htmlparser2';

/* *
 *
 *  Declarations
 *
 * */

export type HTON = [HTON.TagName, HTON.Attributes, HTON.Children];

/* *
 *
 *  Namespace
 *
 * */

export namespace HTON {

    /* *
     *
     *  Declarations
     *
     * */

    export type Attributes = Record<string, string>;

    export type Children = Array<( string | HTON )>;

    export type TagName = string;

    /* *
     *
     *  Functions
     *
     * */

    export function create (
        tagName: TagName,
        attributes: Attributes = {},
        children: Children = []
    ): HTON {
        return [tagName, attributes, children];
    }

    export function isHTML (
        text: string
    ): boolean {
        text = text.trim();

        return (
            text.startsWith( '<' ) &&
            text.endsWith( '>' )
        );
    }

    function parseNode (
        node: ( DOM.Comment | DOM.ParentNode )
    ): HTON {
        const tag = create(
            (
                DOM.isCDATA( node ) ? ':CDATA' :
                    DOM.isComment( node ) ? ':COMMENT' :
                        DOM.isDocument( node ) ? ':DOCUMENT' :
                            node.name
            ),
            ( DOM.isTag( node ) ? node.attribs : {} ),
        );

        if ( DOM.hasChildren( node ) ) {
            for ( const childNode of node.childNodes ) {
                if (
                    DOM.hasChildren( childNode ) ||
                    DOM.isComment( childNode )
                ) {
                    tag[2].push( parseNode( childNode ) );
                }
                else if (
                    DOM.isText( childNode )
                ) {
                    const text = childNode.data.trim();

                    if ( text ) {
                        tag[2].push( text );
                    }
                }
            }
        }

        return tag;
    }

    export function parseText (
        text: string
    ): Array<( string | HTON )> {
        return parseNode( HTML.parseDocument( text ) )[2];
    }

}

/* *
 *
 *  Default Export
 *
 * */

export default HTON;
