const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'styles')],
        prependData: `@import "main";`
    }
}

module.exports = nextConfig
