// app/contacto/page.js

export const metadata = {
   title: "Contacto | AINBH",
   description: "Ponte en contacto con nosotros para más información sobre nuestros cursos y servicios.",
   openGraph: {
     title: "Contacto | AINBH",
     description: "Ponte en contacto con nosotros para más información sobre nuestros cursos y servicios.",
     url: "https://tu-sitio.com/contacto",
     siteName: "AINBH",
   },
 };
 
 export default function Contacto() {
   return (
     <div>
       {/* Sección Principal */}
       <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-center py-16">
         <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
         <p className="text-xl">Estamos aquí para responder cualquier pregunta que tengas. ¡No dudes en escribirnos!</p>
       </section>
       {/* Información de contacto */}
       <section className="py-16 bg-gray-100">
         <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-semibold text-gray-800 mb-8">Otras formas de contacto</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Dirección */}
             <div className="bg-white p-6 rounded-lg shadow-lg">
               <h3 className="text-xl font-semibold text-gray-800 mb-4">Dirección</h3>
               <p className="text-gray-600">Calle Ficticia 123, Ciudad, País</p>
             </div>
 
             {/* Teléfono */}
             <div className="bg-white p-6 rounded-lg shadow-lg">
               <h3 className="text-xl font-semibold text-gray-800 mb-4">Teléfono</h3>
               <p className="text-gray-600">+123 456 7890</p>
             </div>
 
             {/* Redes sociales */}
             <div className="bg-white p-6 rounded-lg shadow-lg">
               <h3 className="text-xl font-semibold text-gray-800 mb-4">Síguenos</h3>
               <div className="flex justify-center space-x-6">
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                   <i className="fab fa-facebook-square text-3xl"></i>
                 </a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                   <i className="fab fa-twitter-square text-3xl"></i>
                 </a>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                   <i className="fab fa-instagram-square text-3xl"></i>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
   );
 }
 