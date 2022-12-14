/* *
 *
 *  Declarations
 *
 * */
import * as DOM from "domhandler";
import * as HTML from 'htmlparser2';
/* *
 *
 *  Namespace
 *
 * */
export var HTON;
(function (HTON) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    function create(tagName, attributes = {}, children = []) {
        return [tagName, attributes, children];
    }
    HTON.create = create;
    function isHTML(text) {
        text = text.trim();
        return (text.startsWith('<') &&
            text.endsWith('>'));
    }
    HTON.isHTML = isHTML;
    function parseNode(node) {
        const tag = create((DOM.isCDATA(node) ? ':CDATA' :
            DOM.isComment(node) ? ':COMMENT' :
                DOM.isDocument(node) ? ':DOCUMENT' :
                    node.name), (DOM.isTag(node) ? node.attribs : {}));
        if (DOM.hasChildren(node)) {
            for (const childNode of node.childNodes) {
                if (DOM.hasChildren(childNode) ||
                    DOM.isComment(childNode)) {
                    tag[2].push(parseNode(childNode));
                }
                else if (DOM.isText(childNode)) {
                    const text = childNode.data.trim();
                    if (text) {
                        tag[2].push(text);
                    }
                }
            }
        }
        return tag;
    }
    function parseText(text) {
        return parseNode(HTML.parseDocument(text))[2];
    }
    HTON.parseText = parseText;
})(HTON = HTON || (HTON = {}));
/* *
 *
 *  Default Export
 *
 * */
export default HTON;
//# sourceMappingURL=HTON.js.map