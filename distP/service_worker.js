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
    "revision": "cffb4222446688266ef67b7715a8cd18"
  },
  {
    "url": "/app.js",
    "revision": "487d6380a6efe43b47739736f2c1ac98"
  },
  {
    "url": "/app.min.css",
    "revision": "cffb4222446688266ef67b7715a8cd18"
  },
  {
    "url": "/global/components/experience/index.js",
    "revision": "80d5ac8eef909ac1d60d0871940708ef"
  },
  {
    "url": "/global/components/header/index.css",
    "revision": "cabb5322739b76d70fc378810116da89"
  },
  {
    "url": "/global/components/header/index.js",
    "revision": "977e6dfe83af0b8b6d4dfc4118e45388"
  },
  {
    "url": "/global/components/header/index.min.css",
    "revision": "cabb5322739b76d70fc378810116da89"
  },
  {
    "url": "/global/components/portfolio/index.css",
    "revision": "e174d3573f7de71f87105fff72cb02d4"
  },
  {
    "url": "/global/components/portfolio/index.js",
    "revision": "11e9a259ae1540774cd8bb02ad8e0523"
  },
  {
    "url": "/global/components/portfolio/index.min.css",
    "revision": "e174d3573f7de71f87105fff72cb02d4"
  },
  {
    "url": "/manifest.js",
    "revision": "90be3c0431ab414ecd2a2800e10a4284"
  },
  {
    "url": "/sw.js",
    "revision": "808b0b6811f34bb2ed6afdd3a0b3d03c"
  },
  {
    "url": "/vendor_chunk.js",
    "revision": "8242f85e96cb91a839dd698080704851"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/^((http[s]?):\/)?\/?([^:\/\s]*)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/, workboxSW.strategies.networkFirst({}), 'GET');
