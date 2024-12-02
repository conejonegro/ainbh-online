// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
     appDir: true, 
   },
   images: {
     domains: ['picsum.photos', 'plchldr.co', "via.placeholder.com", "firebasestorage.googleapis.com", "lh3.googleusercontent.com"], // Dominios permitidos para imágenes
   },
 };
 
 export default nextConfig;
 