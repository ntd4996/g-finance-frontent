const path = require("path");
const nextConfig = {
    reactStrictMode: false,
    exportTrailingSlash: false,
    images: {
        domains: [
            "cdn24hmoney.24hstatic.com",
            "cafefcdn.com",
            "images1.cafef.vn",
            "image.vietstock.vn",
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.NEXT_PUBLIC_URL_BACKEND}/:path*`,
            },
        ];
    },
};

module.exports = nextConfig;
