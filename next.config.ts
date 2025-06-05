import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 수정 ------------------------------------------------------------------
    async rewrites() {
    return [
      {
        source: '/api/crawler/:path*',
        destination: 'https://gukui.koreacentral.cloudapp.azure.com/crawler/:path*',
      },
    ];
  },
  // ------------------------------------------------------------------

};

export default nextConfig;
