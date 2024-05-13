/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  swcMinify: true,
  // cacheMaxMemorySize: 0, // disable default in-memory caching
  generateBuildId: async () => {
    return `v${process.env.NEXT_PUBLIC_VERSION}`
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig
