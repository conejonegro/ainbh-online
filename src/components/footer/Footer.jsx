import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sección de Enlaces */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="/cursos" className="text-gray-400 hover:text-white">Cursos</a></li>
              <li><a href="/nosotros" className="text-gray-400 hover:text-white">Nosotros</a></li>
              <li><a href="/contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>

          {/* Sección de Redes Sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-gray-400 hover:text-white text-2xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-400 hover:text-white text-2xl" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-400 hover:text-white text-2xl" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-gray-400 hover:text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Sección de Información de Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="text-gray-400">AINBH</p>
            <p className="text-gray-400">Calle Ficticia 123, Ciudad</p>
            <p className="text-gray-400">Teléfono: +123 456 789</p>
            <p className="text-gray-400">Email: contacto@ainbh.com</p>
          </div>

          {/* Sección de Suscripción al Boletín */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Suscríbete</h3>
            <p className="text-gray-400 mb-4">Recibe nuestras últimas novedades y cursos.</p>
            <form action="#" method="POST">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-gray-800 text-white py-2 px-4 rounded-l-lg w-64 mb-4"
              />
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-r-lg w-32 hover:bg-green-600"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Línea de Derechos de Autor */}
        <div className="mt-16 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} AINBH. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
