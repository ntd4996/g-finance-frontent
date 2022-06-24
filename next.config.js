const path = require("path");
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["cdn24hmoney.24hstatic.com"],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

module.exports = nextConfig;
