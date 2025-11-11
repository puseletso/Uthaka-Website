/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export for cPanel deployment
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for static hosting
  // Remove React strict mode in production for better performance
  reactStrictMode: true,
}

module.exports = nextConfig
