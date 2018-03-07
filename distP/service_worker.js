importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/app.css",
    "revision": "a1797f05d9f5b759e0d8e784be9d1f19"
  },
  {
    "url": "/app.js",
    "revision": "1146d7577586e778e616689ee8eba95b"
  },
  {
    "url": "/app.min.css",
    "revision": "990ca85e911ab72a411e4ade9e5bdb7e"
  },
  {
    "url": "/global/components/experience/index.js",
    "revision": "7f3e2a9727571be7e6d364ff129ad181"
  },
  {
    "url": "/global/components/header/index.css",
    "revision": "e99b51f74bac8655a8481d89aea835cc"
  },
  {
    "url": "/global/components/header/index.js",
    "revision": "56ff8de0ac12322f754da44b53f1cb7b"
  },
  {
    "url": "/global/components/header/index.min.css",
    "revision": "16d89a4bf483c1024939d7448cdd2e6c"
  },
  {
    "url": "/global/components/portfolio/index.css",
    "revision": "3530fa9033b2604ccb60e6d985061c65"
  },
  {
    "url": "/global/components/portfolio/index.js",
    "revision": "8c83a6a807bf261af24dcd0f656b26ea"
  },
  {
    "url": "/global/components/portfolio/index.min.css",
    "revision": "bd2ffc8daf19d290e691654503632b84"
  },
  {
    "url": "/manifest.js",
    "revision": "c5441b1ade5ed9a7b219eca98feff836"
  },
  {
    "url": "/sw.js",
    "revision": "f9e3d4903a1a89e8995754bba9e490e7"
  },
  {
    "url": "/vendor_chunk.js",
    "revision": "445037ace761cb0c3ba512c8625fd6ce"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/^((http[s]?):\/)?\/?([^:\/\s]*)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/, workboxSW.strategies.networkFirst({}), 'GET');
