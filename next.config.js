/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["uploadthing.com", "utfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
