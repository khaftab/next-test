if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts("fallback-iFIFVF_xTeHBitVLypKRr.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.jpg",revision:"3d3a9ebf4b037250f78b9bc065915f8f"},{url:"/2.jpg",revision:"e8642129cabb3fec63aa8dd26187d2c7"},{url:"/3.jpg",revision:"d87226c099980ef506999c22f2a2c87f"},{url:"/4.jpg",revision:"f54ee3f317b9aa5df32bb32df027b397"},{url:"/5.jpg",revision:"061352f5beb201316d5d7c8d678e0c74"},{url:"/_next/static/chunks/282-cc297335bcb0d7b59989.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/61-89a982143fb3a4786452.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/954-94426bd3bce1c51b8ed4.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/framework-852c1b21255b4351ab3d.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/main-ce25a27c6348b5e6a66e.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/pages/_app-0e454b0eafb4ddcf5d53.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/pages/_error-c5e63f1abf993486dba2.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/pages/article-c8651e5087de794e3769.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/pages/contact-b57699612c54e8b63c01.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/pages/index-5617a95247cd57df2a56.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/pages/service-ddeaad891f50d5f589d2.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/pages/ssr-8d77e4822176cb0d5dce.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/chunks/webpack-059055d35ea476d4f4bb.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/css/58da1c44d37c9142413d.css",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/css/9555fbe4118c83c59ab9.css",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/iFIFVF_xTeHBitVLypKRr/_buildManifest.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/_next/static/iFIFVF_xTeHBitVLypKRr/_ssgManifest.js",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-192x192.png",revision:"dc5feac23a32de5802ac672a9829b966"},{url:"/icons/icon-256x256.png",revision:"fb3403e29937f6afd994781c3c3eaf6c"},{url:"/icons/icon-384x384.png",revision:"1fdcc47010a5b56e5e15ab69981dc353"},{url:"/icons/icon-512x512.png",revision:"430bfefb2d869f15516e3254d5e7dfee"},{url:"/icons/maskable_icon_x192.png",revision:"bc2d02eb8695b738063a2777aba0f922"},{url:"/icons/maskable_icon_x384.png",revision:"3f3b931ba9c111679966f3baf31ec1eb"},{url:"/icons/maskable_icon_x512.png",revision:"2649b39cc0cdc3204f32b29dcb540d70"},{url:"/manifest.json",revision:"a0a01cfd883634b9aed8a4808115850c"},{url:"/public/1.png",revision:"iFIFVF_xTeHBitVLypKRr"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));