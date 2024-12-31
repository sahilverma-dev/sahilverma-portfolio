/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.node/,
      use: "node-loader",
    });

    return config;
  },
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
      {
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
