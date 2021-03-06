import "statgrab/do"

//////////////////
// Index Model //
////////////////

import Index from "models/Index.js"
const index = new Index(require("data/index.json"))
export default index

// By attaching this to the window, we
// can access this from the javascript
// developer console. We remove this in
// production, but until then, it's a
// useful backdoor during development.
if(__STAGE__ == "DEVELOPMENT") {
    window._ = index
}

////////////////
// Main Loop //
//////////////

import Yaafloop from "yaafloop"

import * as Preact from "preact"
import IndexView from "views/Index.view.js"

const loop = new Yaafloop(function(delta) {
    index.update(delta)
    this.view = Preact.render(<IndexView/>, document.body, this.view)
})
