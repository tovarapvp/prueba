/** @type {import('next').NextConfig} */
// eslint-disable-next-line
const nextConfig = {
  reactStrictMode: true
} 

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images2.imgbox.com', 'i.imgur.com']

  },
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { topLevelAwait: true }
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config
  }
}
