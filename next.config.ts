import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'mike-folepe';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  output: 'export',

  images: {
    unoptimized: true,
  },

  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },

};

export default nextConfig;
