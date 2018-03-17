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
    "revision": "1fbb2b119849b2efe698047f0e7f2a6f"
  },
  {
    "url": "/app.js",
    "revision": "6e412ee14c63127fd896f7f2293b1849"
  },
  {
    "url": "/app.min.css",
    "revision": "39e0e7ed2119233ebf059ae19eabc58b"
  },
  {
    "url": "/global/components/experience/index.js",
    "revision": "60837892543d1d06884a5604a2e1ceb8"
  },
  {
    "url": "/global/components/header/index.css",
    "revision": "e99b51f74bac8655a8481d89aea835cc"
  },
  {
    "url": "/global/components/header/index.js",
    "revision": "bae63cc11c0c999da32f0fc94229e304"
  },
  {
    "url": "/global/components/header/index.min.css",
    "revision": "16d89a4bf483c1024939d7448cdd2e6c"
  },
  {
    "url": "/global/components/portfolio/index.css",
    "revision": "9530a035bd88aa51199f40e3087a25fd"
  },
  {
    "url": "/global/components/portfolio/index.js",
    "revision": "8aa2a73fac3dcfb2aaf817ce5118698b"
  },
  {
    "url": "/global/components/portfolio/index.min.css",
    "revision": "b77cc98005cfc41478bae4616374cec3"
  },
  {
    "url": "/global/components/services/index.css",
    "revision": "3a4c2bd633cd4b8851e0ec28f4c9908a"
  },
  {
    "url": "/global/components/services/index.js",
    "revision": "4f251f2f4c747568b5e7010b2b96fd33"
  },
  {
    "url": "/global/components/services/index.min.css",
    "revision": "488d01b88437d2ac84f3a2f696a574bc"
  },
  {
    "url": "/global/components/testimonials/index.css",
    "revision": "3a4c2bd633cd4b8851e0ec28f4c9908a"
  },
  {
    "url": "/global/components/testimonials/index.js",
    "revision": "88337fd3a7fd0a4af7f87421d5fc7810"
  },
  {
    "url": "/global/components/testimonials/index.min.css",
    "revision": "488d01b88437d2ac84f3a2f696a574bc"
  },
  {
    "url": "/manifest.js",
    "revision": "090b691c9b5066bbabf960c8ce92cbef"
  },
  {
    "url": "/sw.js",
    "revision": "34a1f98c82e68302d289e0ddea5826e9"
  },
  {
    "url": "/vendor_chunk.js",
    "revision": "23637cd14411c2cb5112cf88cb3af610"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/^((http[s]?):\/)?\/?([^:\/\s]*)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/, workboxSW.strategies.networkFirst({}), 'GET');
