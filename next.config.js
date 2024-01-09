/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ak-d.tripcdn.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'pix1.agoda.net',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'pix2.agoda.net',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'pix3.agoda.net',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'pix4.agoda.net',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'pix5.agoda.net',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'q-xx.bstatic.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'cms.triptripgo.hk',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig
