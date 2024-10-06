/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false; // This helps with certain packages that are node-specific
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
