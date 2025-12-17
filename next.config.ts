import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'downloads.ctfassets.net',
      'cdn.prod.website-files.com',
      'litiligroup.com'
      // Add any other external image domains you use here
    ],
  }
};

export default nextConfig;
