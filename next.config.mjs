/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./styles'],
  },
  images: {
    remotePatterns: [
      {
        hostname: '10upapi.ispykenny.com',
      },
      {
        hostname: 'secure.gravatar.com',
      },
    ],
  },
};

export default nextConfig;
