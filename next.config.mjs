/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  rewrites: async () =>
    process.env.NODE_ENV === 'production'
      ? []
      : [
          {
            source: '/api/:path*',
            destination: 'http://localhost:3001/:path*',
          },
          {
            source: '/admin/:path*',
            destination: 'http://localhost:5173/admin/:path*',
          },
        ],
}

export default nextConfig
