
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/expenses"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28043, hash: 'edc914584250253e10b193a9f47e5e94e5ccaaed537fac0a66f1ed2d0f7ea618', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17202, hash: 'ddc65149440fe39b0789c83247727834f3c05e2dba0aba6cdffa640c3901f301', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'expenses/index.html': {size: 71948, hash: 'c6242810ff70504fcf5dabc73ca6e0a33caf2fb4c63cf1b5052244548db8b5f7', text: () => import('./assets-chunks/expenses_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 53378, hash: '3f88a2b3635c5eff9e861406642a15140212a166a432ccaf379431ec14957dd1', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-3BJQZRUW.css': {size: 237851, hash: '/Wtpv8jvK8I', text: () => import('./assets-chunks/styles-3BJQZRUW_css.mjs').then(m => m.default)}
  },
};
