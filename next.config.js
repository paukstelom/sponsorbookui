/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://78.56.255.214:25565/:path*',
                // destination: 'http://localhost:/:path*',
            },
        ]
    },
}

module.exports = nextConfig
