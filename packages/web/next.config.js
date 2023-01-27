const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, {isServer}) => {
    if (isServer) {
      config.externals.push('_http_common');
      config.externals.push('encoding');
    }
    config.externals = [...config.externals, 'db']
    return config;
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
}

module.exports = nextConfig
