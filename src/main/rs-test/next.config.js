/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*', // Match any API route
                destination: 'http://3.34.1.192:8080/api/:path*', // Proxy to your backend server
            },
        ];
    },
};