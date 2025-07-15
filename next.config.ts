import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/wordle/:path*',
        destination: 'https://www.nytimes.com/svc/wordle/:path*',
      },
    ];
  },
};

export default nextConfig;
