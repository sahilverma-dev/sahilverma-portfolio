/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "letsenhance.io",
      },
      {
        hostname: "firebase.google.com",
      },
      {
        hostname: "media2.dev.to",
      },
      {
        hostname: "github.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "camo.githubusercontent.com",
      },
      {
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
