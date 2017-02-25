'use babel';

import Parent from './parent.js';

export default class Panel extends Parent {
/* (Str, Board) -> Panel
*
* An object that contains keys and has a more
* specific purpose within that category.
*
* TODO: Sanitize display name for ID name
*/
  constructor(displayName, parent) {
  // `parent` should be a Board object
    // Base: id, type, displayName, parent, node, tags, children,
    // destroy
    // Parent: add, remove, get/getBy
    super(displayName, parent);

    const panel   = this;
    panel.id      = displayName;

    panel.rows    = [];
  }  // constructor

}  // Panel