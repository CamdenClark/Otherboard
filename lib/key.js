'use babel';

import Base from './base.js';

export default class Key extends Base {
/* (Str, Panel) -> Key
*
* An object that contains keys and has a more
* specific purpose within that category.
*
* TODO: Sanitize display name for ID name
*/

  constructor(source, parent) {
  // constructor(keyData, parent) {  // For the future! Huzzah!
  // `parent` should be a Panel object
    // Base: id, type, displayName, parent, node, tags, children,
    // destroy
    // console.log(source.displayName)
    super(source.displayName, parent);

    const key = this;
    // TODO: Make sure no two keys have the same id (ex: same tag and selector showing up on search panel)
    key.id   = source.id;
    key.toSimulate = source.toSimulate;

    key.type = source.type;
    key.tags = source.tags; // Searchable
    key.classes = source.classes; // For DOM node
    // TODO: Add classes to Key node creation (key view)

    key.activate = source.activate;
    // key.activate = source.activate || key.activate;
    // key.navigate = source.navigate || key.navigate;
    key.path = source.path;
    key._goTo = source._goTo;
    // key._goTo = source._goTo || key._goTo;
  }

  // // simulate() {}
  //
  // activate() {
  //   const key = this;
  //   const editor = atom.workspace.getActiveTextEditor();
  //   editor.insertText(key.toSimulate);
  //   return key;
  // }
  //
  // // ANY NAVIGATION WILL BE CALLED FROM `activate`?
  // // navigate() {}
  //
  // _goTo() {
  //   // TODO: Allow paths other than siblings
  //   // TODO: Make a KeyUtils for defaults (to hand in to key data???)
  //   const key = this;
  //
  //   if (!key.path) {
  //     console.log("Key", key, "doesn't go anywhere, so don't push it, bub.");
  //     return key;
  //   }
  //
  //   const destination = key.parent.get(key.path);
  //   if (destination) {destination.view.show();}  // TODO: Maybe switch responsibilities???
  //   else {console.log("Something's wrong with your path, friend. Check yourself. Path", key.path, "; Current location:", key.parent)}
  //   return key;  // return destination???
  // } // _goTo

} // Key