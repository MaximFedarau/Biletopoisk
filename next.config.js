const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'styles')],
        prependData: `@use "main" as *;`
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.postimg.cc"
            }
        ]
    }
}

module.exports = nextConfig
