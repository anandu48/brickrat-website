// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-services-js": () => import("./../../../src/pages/services.js" /* webpackChunkName: "component---src-pages-services-js" */),
  "component---src-pages-team-js": () => import("./../../../src/pages/team.js" /* webpackChunkName: "component---src-pages-team-js" */),
  "component---src-templates-basic-js": () => import("./../../../src/templates/basic.js" /* webpackChunkName: "component---src-templates-basic-js" */),
  "component---src-templates-contact-js": () => import("./../../../src/templates/contact.js" /* webpackChunkName: "component---src-templates-contact-js" */),
  "component---src-templates-service-js": () => import("./../../../src/templates/service.js" /* webpackChunkName: "component---src-templates-service-js" */),
  "component---src-templates-team-js": () => import("./../../../src/templates/team.js" /* webpackChunkName: "component---src-templates-team-js" */)
}

