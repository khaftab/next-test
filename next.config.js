// next.config.js
// require('dotenv').config()
// module.exports = {
//   async headers() {
//     return [
//       {
//         // matching all API routes
//         source: "/api/:firebase*",
//         headers: [
//           { key: "Access-Control-Allow-Credentials", value: "true" },
//           { key: "Access-Control-Allow-Origin", value: "*" },
//           { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//           { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//         ]
//       },
// {
//   env: {
//     SECRET = process.env.SECRET
//   }
// }
//     ]
//   }
// };
const withPWA = require('next-pwa')
const withImages = require('next-images')

// module.exports = [
//     withImages(),
//     withPWA({
//         future: { webpack5: true },
//         pwa: {
//             dest: 'public',
//             fallbacks: {
//                 image: '/public/1.png',
//                 // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
//                 // font: '/static/font/fallback.woff2',
//                 // audio: ...,
//                 // video: ...,
//             }
//         }
//     })
// ]

module.exports =
    withPWA({
        future: { webpack5: true },
        images: {
            domains: ['haka.com']
        },
        pwa: {
            dest: 'public',
            fallbacks: {
                image: '/public/1.png',
                register: false
                // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
                // font: '/static/font/fallback.woff2',
                // audio: ...,
                // video: ...,
            }
        },



    })