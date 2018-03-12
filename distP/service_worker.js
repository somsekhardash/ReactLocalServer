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
    "revision": "bd219f6bc775d3c428b97a67b7cf8203"
  },
  {
    "url": "/app.min.css",
    "revision": "39e0e7ed2119233ebf059ae19eabc58b"
  },
  {
    "url": "/global/components/experience/index.js",
    "revision": "84332630fed4a103489e5a16cd996432"
  },
  {
    "url": "/global/components/header/index.css",
    "revision": "e99b51f74bac8655a8481d89aea835cc"
  },
  {
    "url": "/global/components/header/index.js",
    "revision": "fc631e1b00914bf50d60686bdad73714"
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
    "revision": "29ea69c20ea9c9713a9cb36ba8460fbc"
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
    "revision": "20de80a74822617dd4bc2e83c5fa1a18"
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
    "revision": "11d29b77073e5163c3f5988c85aaf082"
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
    "revision": "6bdccfd981ee7a060bc6c97077493b30"
  },
  {
    "url": "/vendor_chunk.js",
    "revision": "cd4b9ef98c89400757be0d9f3980d69a"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/^((http[s]?):\/)?\/?([^:\/\s]*)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/, workboxSW.strategies.networkFirst({}), 'GET');
