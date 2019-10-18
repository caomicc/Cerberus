const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/src/pages/404.js"))),
  "component---src-pages-addison-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/src/pages/addison.js"))),
  "component---src-pages-ibis-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/src/pages/ibis.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/src/pages/index.js"))),
  "component---src-pages-uclubboston-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/src/pages/uclubboston.js"))),
  "component---src-pages-waverley-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/src/pages/waverley.js")))
}

