"use client";

import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Curso() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const parametros = useParams();

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const slug = parametros.slug;
        const response = await fetch("/api/cursos");
        const data = await response.json();
        const foundData = data.find((curso) => curso.slug === slug);
        setData(foundData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDataFromAPI();
  }, [parametros.slug]);

  if (loading) {
    return <div className="text-center py-8">Cargando...</div>;
  }

  if (!data) {
    return <div className="text-center py-8">Curso no encontrado.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Imagen del curso */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="relative h-64 w-full md:h-full">
              <Image
                src={data.imageUrl || "https://via.placeholder.com/400x300"}
                alt={data.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>

          {/* Información del curso */}
          <div className="md:w-2/3 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {data.name}
            </h1>
            <p className="text-gray-600 mb-6">{data.description}</p>

            {/* Duración del curso */}
            <div className="flex items-center mb-4">
              <svg
                className="h-6 w-6 text-gray-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-700">{data.duracion}</span>
            </div>

            {/* Lo que aprenderás */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Lo que aprenderás:
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Fundamentos de la nutrición vegana.</li>
                <li>Técnicas de cocina vegana.</li>
                <li>Planificación de menús equilibrados y saludables.</li>
                <li>Sustitutos de ingredientes de origen animal.</li>
                <li>
                  Cómo leer etiquetas de productos y elegir opciones veganas.
                </li>
                <li>
                  El impacto del veganismo en la salud y el medio ambiente.
                </li>
                <li>
                  Consejos prácticos para mantener una dieta vegana a largo
                  plazo.
                </li>
              </ul>
            </div>

            {/* Incluye */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Incluye:
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  La calidad del contenido y los materiales proporcionados.
                </li>
                <li>La experiencia y conocimiento del instructor.</li>
                <li>
                  La accesibilidad y flexibilidad en el horario del curso.
                </li>
                <li>
                  La posibilidad de obtener un certificado de finalización.
                </li>
                <li>
                  La interacción y el apoyo que se ofrece a los estudiantes
                  durante el curso.
                </li>
                <li>La duración del curso y su estructura bien definida.</li>
                <li>
                  La oportunidad de aprender habilidades prácticas y aplicables
                  en la vida real.
                </li>
              </ul>
            </div>

            {/* Precio y botón de inscripción */}
            <div className="flex justify-between items-center mt-8">
              <span className="text-2xl font-bold text-gray-900">
                ${data.price}
              </span>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                Inscribirse al curso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
