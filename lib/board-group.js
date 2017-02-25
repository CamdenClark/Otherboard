'use babel';

import Parent from './parent.js';

export default class BoardGroup extends Parent {
/* (Str, OskObj) -> BoardGroup
*
* An object that contains a list of boards
* TODO: XXX Sanitize display name for ID name
* TODO: pass in object into constructor instead and assign an id to the object originally
*/
  constructor(displayName, parent) {
  // `parent` should be OSK
    // Base: id, type, displayName, parent, node, tags, children,
    // destroy
    // Parent: add, remove, get/getBy
    super(displayName, parent);

    const group   = this;
    group.id      = displayName;
  }  // constructor()

}  // BoardGroup