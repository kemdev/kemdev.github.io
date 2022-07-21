const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: false,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/NaveenDA/naveenda.github.io/gh-pages/' : '',
  distDir: 'src',
  images: {
    domains: ['static1.makeuseofimages.com'],
  },
}
