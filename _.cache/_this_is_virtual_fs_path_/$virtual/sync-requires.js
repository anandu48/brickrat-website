
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/anandu/Code/BrickRat/brickrat-website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/anandu/Code/BrickRat/brickrat-website/src/pages/index.js")),
  "component---src-pages-services-js": preferDefault(require("/Users/anandu/Code/BrickRat/brickrat-website/src/pages/services.js")),
  "component---src-pages-team-js": preferDefault(require("/Users/anandu/Code/BrickRat/brickrat-website/src/pages/team.js")),
  "component---src-templates-basic-js": preferDefault(require("/Users/anandu/Code/BrickRat/brickrat-website/src/templates/basic.js")),
  "component---src-templates-contact-js": preferDefault(require("/Users/anandu/Code/BrickRat/brickrat-website/src/templates/contact.js")),
  "component---src-templates-service-js": preferDefault(require("/Users/anandu/Code/BrickRat/brickrat-website/src/templates/service.js")),
  "component---src-templates-team-js": preferDefault(require("/Users/anandu/Code/BrickRat/brickrat-website/src/templates/team.js"))
}

