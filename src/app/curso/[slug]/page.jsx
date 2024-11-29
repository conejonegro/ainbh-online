"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export default function Curso({ params }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const parametros = useParams();
  //console.log("misparamsformuse", parametros);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        //const slug = await params.slug;  // Get the slug from the URL parameter
        // console.log("misparams", await params)
        const slug = parametros.slug;
        const response = await fetch("/api/cursos");
        const data = await response.json();
        //console.log("midata5", data);
        const foundData = data.find((curso) => curso.slug === slug);
        setData(foundData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDataFromAPI();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src="https://picsum.photos/400/300"
              alt="Introducción a la comida Vegana"
              width={400}
              height={300}
              objectFit="cover"
              className="h-48 w-full object-cover md:h-full md:w-48"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {data.name}
            </h1>
            <p className="text-gray-600 mb-4">{data.description}</p>
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
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Lo que aprenderás:
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Fundamentos de la nutrición vegana</li>
                <li>Técnicas de cocina vegana</li>
                <li>Planificación de menús equilibrados</li>
                <li>Sustitutos de ingredientes de origen animal</li>
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Incluye:
              </h2>
              <ul className="text-gray-600">
                <li className="flex items-center mb-2">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  12 lecciones en video
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Recetario digital descargable
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Certificado de finalización
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900">$99.99</span>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Inscribirse al curso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
