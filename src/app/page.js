import Link from "next/link";// app/home/page.js
import Image from "next/image";
import styles from "@/app/css/home/home.module.css"

export const metadata = {
  title: "Inicio | AINBH",
  description: "Bienvenidos a AINBH, tu espacio para aprender sobre nutrición y bienestar vegano.",
  openGraph: {
    title: "Inicio | AINBH",
    description: "Bienvenidos a AINBH, tu espacio para aprender sobre nutrición y bienestar vegano.",
    url: "https://tu-sitio.com",
    siteName: "AINBH",
  },
};

export default function Home() {
  return (
    <div>
      {/* Sección Principal - Hero */}
      <section className={`relative h-screen  text-white flex items-center justify-center text-center ${styles.banner}`}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">Bienvenidos a AINBH</h1>
          <p className="text-lg mb-6">Tu espacio para aprender sobre nutrición vegana, bienestar y más.</p>
          <Link
            href="/cursos"
            className="bg-green-500 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition duration-300"
          >
            Explora nuestros cursos
          </Link>
        </div>
      </section>

      {/* Sección de Cursos Destacados */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Cursos Destacados</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Curso 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/cineclub-forever.appspot.com/o/course-1.png?alt=media"
                alt="Curso 1"
                className="w-full h-48 object-cover rounded-md mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Introducción a la comida Vegana</h3>
              <p className="text-gray-600 mb-4">Aprende los principios básicos de la comida vegana y cómo crear deliciosas recetas.</p>
              <Link
                href="/curso/introduccion-comida-vegana"
                className="text-green-500 hover:text-green-600"
              >
                Más información
              </Link>
            </div>

            {/* Curso 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/cineclub-forever.appspot.com/o/course-2.png?alt=media"
                alt="Curso 2"
                className="w-full h-48 object-cover rounded-md mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Nutrición y Bienestar Vegano</h3>
              <p className="text-gray-600 mb-4">Descubre cómo llevar una dieta vegana equilibrada para mejorar tu salud y bienestar.</p>
              <Link
                href="/curso/nutricion-bienestar-vegano"
                className="text-green-500 hover:text-green-600"
              >
                Más información
              </Link>
            </div>

            {/* Curso 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/cineclub-forever.appspot.com/o/course-3.png?alt=media"
                alt="Curso 3"
                className="w-full h-48 object-cover rounded-md mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Cocina Vegana Avanzada</h3>
              <p className="text-gray-600 mb-4">Para quienes buscan perfeccionar sus habilidades en la cocina vegana.</p>
              <Link
                href="/curso/avanzado-vegano"
                className="text-green-500 hover:text-green-600"
              >
                Más información
              </Link>
            </div>

            {/* Curso 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/cineclub-forever.appspot.com/o/course-4.png?alt=media"
                alt="Curso 4"
                className="w-full h-48 object-cover rounded-md mb-4"
                width={300}
                height={200}
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Bienestar y Alimentación</h3>
              <p className="text-gray-600 mb-4">Aprende cómo el bienestar físico y emocional se complementan con una alimentación saludable.</p>
              <Link
                href="/curso/bienestar-alimentacion"
                className="text-green-500 hover:text-green-600"
              >
                Más información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Lo que dicen nuestros estudiantes</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonio 1 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-gray-600 mb-4">
                Este curso cambió mi vida. He mejorado mi salud y me siento más energizado cada día. ¡Recomiendo AINBH al 100%!
              </p>
              <h3 className="font-semibold text-gray-700">María González</h3>
              <p className="text-gray-500">Estudiante de Nutrición Vegana</p>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-gray-600 mb-4">
                Las lecciones son fáciles de seguir y muy prácticas. Ahora preparo mis platos veganos favoritos en casa.
              </p>
              <h3 className="font-semibold text-gray-700">Carlos Ramírez</h3>
              <p className="text-gray-500">Estudiante de Cocina Vegana</p>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-gray-600 mb-4">
                Los instructores son muy profesionales y siempre dispuestos a ayudar. Aprendí mucho sobre bienestar vegano.
              </p>
              <h3 className="font-semibold text-gray-700">Ana López</h3>
              <p className="text-gray-500">Estudiante de Bienestar Vegano</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de CTA - Llamado a la acción */}
      <section className="py-16 bg-green-500 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">¿Listo para comenzar tu viaje vegano?</h2>
        <p className="text-lg mb-6">
          Únete a nuestros cursos hoy y transforma tu salud y bienestar.
        </p>
        <Link
          href="/cursos"
          className="bg-white text-green-500 px-8 py-3 rounded-full text-lg hover:bg-gray-200 transition duration-300"
        >
          Explora nuestros cursos
        </Link>
      </section>
    </div>
  );
}
