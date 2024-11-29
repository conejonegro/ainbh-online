// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
     appDir: true, 
   },
   images: {
     domains: ['picsum.photos', 'plchldr.co'], // Dominios permitidos para imágenes
   },
 };
 
 export default nextConfig;
 