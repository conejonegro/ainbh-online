import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cursos | AINBH",
  description:
    "Conoce más sobre nuestros cursos, enfocados en una nutrición vegana saludable y sostenible.",
  openGraph: {
    title: "Cursos | AINBH",
    description:
      "Explora nuestra oferta educativa sobre nutrición y cocina vegana.",
    url: "https://tu-sitio.com/cursos",
    siteName: "AINBH",
  },
};

async function fetchCursos() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const res = await fetch(`${API_URL}/api/cursos`);
  if (!res.ok) {
    throw new Error("Failed to fetch cursos");
  }
  return res.json();
}

export default async function Cursos() {
  const cursos = await fetchCursos(); // Obtener los datos de los cursos directamente en el servidor

  return (
    <div className="bg-gray-100 py-16">
      {/* Título de la página */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nuestros Cursos
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explora nuestra oferta educativa sobre nutrición vegana, cocina
          saludable y bienestar humano.
        </p>
      </div>
      {/* Grid de Cursos */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.length > 0 ? (
            cursos.map((curso) => (
              <Link href={`/curso/${curso.slug}`} key={curso.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
                  <div className="relative"></div>
                  <div className="p-6">
                    <Image
                      src={curso.imageUrl}
                      alt="Curso 3"
                      className="w-full h-48 object-cover rounded-md mb-4"
                      width={300}
                      height={200}
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                      {curso.name}
                    </h2>
                    <p className="text-gray-600 text-base mb-4">
                      {curso.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <p>{curso.duracion}</p>
                      <p className="font-bold text-green-500">
                        Desde: ${curso.precio}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              No se encontraron cursos disponibles.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
