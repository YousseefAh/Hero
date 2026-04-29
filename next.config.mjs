/**
 * Polyfill for broken Node.js localStorage (--localstorage-file without valid path).
 * Must run before any other code that might use localStorage.
 */
if (typeof globalThis !== "undefined") {
  const g = globalThis;
  if (!g.localStorage || typeof g.localStorage.getItem !== "function") {
    g.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      get length() {
        return 0;
      },
      key: () => null,
    };
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ESLint patch fails with ESLint 9 + eslint-config-next (known rushstack issue)
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;