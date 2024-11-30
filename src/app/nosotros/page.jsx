// app/nosotros/page.js
import Image from "next/image";
export const metadata = {
  title: "Nosotros | AINBH",
  description: "Conoce más sobre nuestra misión, visión y valores en AINBH.",
  openGraph: {
    title: "Nosotros | AINBH",
    description: "Conoce más sobre nuestra misión, visión y valores en AINBH.",
    url: "https://tu-sitio.com/nosotros",
    siteName: "AINBH",
  },
};

export default function Nosotros() {
  return (
    <div className="bg-gray-50">
      {/* Sección Principal */}
      <section className="relative h-96 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">Nosotros</h1>
          <p className="text-lg mt-4">Conoce más sobre nuestra misión, visión y valores en AINBH.</p>
        </div>
      </section>

      {/* Sección Misión, Visión y Valores */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Misión, Visión y Valores</h2>

          {/* Misión */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Misión</h3>
              <p className="text-gray-600">
                Nuestra misión es promover el bienestar humano y la salud global a través de la educación y la práctica de la
                nutrición basada en plantas.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Visión</h3>
              <p className="text-gray-600">
                Nos visualizamos como un referente global en educación sobre nutrición vegana, inspirando a más personas a tomar
                decisiones conscientes para mejorar su salud y el medio ambiente.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Valores</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Compromiso con la salud y el bienestar.</li>
                <li>Sostenibilidad y respeto por el medio ambiente.</li>
                <li>Educación continua y empoderamiento.</li>
                <li>Inclusión y diversidad en nuestras prácticas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Equipo */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Conoce a Nuestro Equipo</h2>

          {/* Lista de miembros del equipo */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Miembro 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Miembro 1"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-semibold text-gray-700">Juan Pérez</h3>
              <p className="text-gray-500">Nutricionista Principal</p>
            </div>

            {/* Miembro 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Miembro 2"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-semibold text-gray-700">Ana Gómez</h3>
              <p className="text-gray-500">Chef Vegana</p>
            </div>

            {/* Miembro 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Miembro 3"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-semibold text-gray-700">Carlos Rodríguez</h3>
              <p className="text-gray-500">Asesor en Bienestar</p>
            </div>

            {/* Miembro 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Miembro 4"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-semibold text-gray-700">Sofía Martínez</h3>
              <p className="text-gray-500">Educadora de Salud</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Contáctanos</h2>
          <p className="text-lg text-gray-600 mb-4">
            Si tienes alguna pregunta o deseas más información sobre nuestros cursos, no dudes en ponerte en contacto con nosotros.
          </p>
          <a
            href="mailto:contacto@ainbh.com"
            className="bg-green-500 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition duration-300"
          >
            Enviar un correo
          </a>
        </div>
      </section>
    </div>
  );
}
