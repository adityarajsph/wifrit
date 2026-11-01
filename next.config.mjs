/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Allow Next.js to serve local static images without the optimization
    // pipeline failing in production environments that don't support it.
    unoptimized: true,
  },
};

export default nextConfig;
