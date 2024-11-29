import Image from "next/image";
import Link from "next/link";

export default async function Cursos() {
  const cursos = [
    {
      id: 1,
      name: "Introducción a la comida Vegana",
      slug: "introduccion-comida-vegana",
      description:
        "En este curso aprenderás los principios básicos de la comida vegana, incluyendo los beneficios para la salud y el medio ambiente, y cómo crear deliciosas recetas veganas para cada comida.",
      imageUrl: "https://picsum.photos/200/300",
      duracion: "3 meses",
    },
    {
      id: 2,
      name: "Nutrición y Bienestar Vegano",
      slug: "nutricion-bienestar-vegano",
      description:
        "Este curso se enfoca en cómo llevar una dieta vegana equilibrada, cubriendo nutrientes esenciales, planificación de comidas y cómo optimizar tu salud a través de la nutrición basada en plantas.",
      imageUrl: "https://picsum.photos/200/300",
      duracion: "2 meses",
    },
    {
      id: 3,
      name: "Cocina Vegana Avanzada",
      slug: "avanzado-vegano",
      description:
        "Un curso diseñado para aquellos que ya tienen experiencia en la cocina vegana. Aprenderás técnicas avanzadas de preparación, presentación y cómo crear platos veganos gourmet.",
      imageUrl: "https://picsum.photos/200/300",
      duracion: "4 meses",
    },
  ];

  //const response = await fetch("/api/cursos");
  //const cursos = await response.json();
  //console.log("miscursos", cursos)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cursos.map((curso) => (
          <Link href={`/curso/${curso.slug}`} key={curso.id}>
            <div
              
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={curso.imageUrl}
                  alt={curso.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {curso.name}
                </h2>
                <p className="text-gray-600 mb-4">{curso.description}</p>
                <p className="text-sm text-gray-500">
                  Duración: {curso.duracion}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
