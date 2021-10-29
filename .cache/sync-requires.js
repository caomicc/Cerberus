const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/src/pages/404.js"))),
  "component---src-pages-curriculum-vitae-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/src/pages/curriculum-vitae.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/cameronomiccioli/Documents/git/cerberus/src/pages/projects.js")))
}

