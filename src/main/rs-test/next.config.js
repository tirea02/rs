/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*', // Match any API route
                destination: 'http://localhost:8080/api/:path*', // Proxy to your backend server
            },
        ];
    },
};