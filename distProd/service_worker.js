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
    "url": "app.js",
    "revision": "3f83868255556492ebe9a78cc6c987ac"
  },
  {
    "url": "app.min.css",
    "revision": "46a45d1062cd966bbf1bb75d2c6bb810"
  },
  {
    "url": "commons_chunk.js",
    "revision": "93f8fcad7e1a412ac59fb4eefa766f0e"
  },
  {
    "url": "global/components/experience/index.js",
    "revision": "af6d22d5308d75ebfbebd726da41ae0a"
  },
  {
    "url": "global/components/header/index.js",
    "revision": "b0348ade15f72a0cbe2f37581c5fe3f3"
  },
  {
    "url": "global/components/header/index.min.css",
    "revision": "cabb5322739b76d70fc378810116da89"
  },
  {
    "url": "global/components/portfolio/index.js",
    "revision": "ef4f4fbba01da71d49762f0b315ee9a5"
  },
  {
    "url": "styles.css",
    "revision": "46a45d1062cd966bbf1bb75d2c6bb810"
  },
  {
    "url": "sw.js",
    "revision": "b8e8c3390e662f8e143197849342db79"
  },
  {
    "url": "vendor_chunk.js",
    "revision": "a13b6615a62d4356f5b99548a9e313c6"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/^((http[s]?):\/)?\/?([^:\/\s]*)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/, workboxSW.strategies.networkFirst({}), 'GET');
