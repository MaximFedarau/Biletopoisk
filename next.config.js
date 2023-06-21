const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'styles')],
        prependData: `@use "main" as *;`
    }
}

module.exports = nextConfig
