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
    "revision": "ec125a1a963d4daedddc104274184b3f"
  },
  {
    "url": "/app.js",
    "revision": "0dc54346683b663cdbb8441a681fc328"
  },
  {
    "url": "/app.min.css",
    "revision": "db77fb1248e1ea4499b182c007cbcb45"
  },
  {
    "url": "/global/components/experience/index.js",
    "revision": "e551e7c51b3de8571b4c3d088919abf6"
  },
  {
    "url": "/global/components/header/index.css",
    "revision": "e99b51f74bac8655a8481d89aea835cc"
  },
  {
    "url": "/global/components/header/index.js",
    "revision": "b4c7add1932a180ec88e7e34b3a07e35"
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
    "revision": "e92d841de75d841414db6090ff4ba949"
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
    "revision": "1919d629fc2f5506fb3fea4df598e5a5"
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
    "revision": "928c88a0878dad03d0a42da0c4e49867"
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
    "revision": "93dfaa6e5dfc183f1e56cf43c87de49d"
  },
  {
    "url": "/vendor_chunk.js",
    "revision": "7504bce6688299792f6b1d25e236abe9"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/^((http[s]?):\/)?\/?([^:\/\s]*)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/, workboxSW.strategies.networkFirst({}), 'GET');
