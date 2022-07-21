const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: false,
  assetPrefix: isProd ? 'kemdev.github.io' : '',
  distDir: 'src',
  images: {
    domains: ['static1.makeuseofimages.com'],
  },
}
