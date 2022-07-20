// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['static1.makeuseofimages.com'],
//   },
// }
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/kemdev/kemdev.github.io/gh-pages/' : '',
}