/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "p0s6j4vdsr.ufs.sh",
      },
      {
        protocol:"https",
        hostname:"images.unsplash.com"
      }
    ],
  },
};

export default nextConfig;
