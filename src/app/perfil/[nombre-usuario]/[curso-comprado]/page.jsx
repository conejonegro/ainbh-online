import React from 'react'

export default function PurchasedCoursePage() {
  // Datos estáticos del curso
  const courseData = {
    title: "Fundamentos de la Nutrición Vegana",
    currentVideo: {
      title: "Introducción a las Proteínas Vegetales",
      description: "En esta lección, aprenderemos sobre las diversas fuentes de proteínas en una dieta vegana y cómo incorporarlas efectivamente en nuestras comidas diarias.",
    },
    nextVideos: [
      { id: 2, title: "Vitamina B12 y Suplementación" },
      { id: 3, title: "Planificación de Comidas Balanceadas" },
      { id: 4, title: "Superalimentos Veganos" },
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">{courseData.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Reproductor de video simulado */}
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-2xl text-gray-600">Reproductor de Video</span>
          </div>
          
          {/* Descripción del video */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-black">{courseData.currentVideo.title}</h2>
            <p className="text-gray-600">{courseData.currentVideo.description}</p>
          </div>
          
          {/* Progreso del curso y botón de completar */}
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex-grow mr-4">
              <p className="text-sm font-medium text-gray-500 mb-1">Progreso del curso</p>
            
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full">
              Marcar como completada
            </button>
          </div>
        </div>
        
        {/* Lista de siguientes videos */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-black">Próximas lecciones</h3>
          <ul className="space-y-4">
            {courseData.nextVideos.map((video) => (
              <li key={video.id} className="flex items-center">
                <span className="w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center mr-3">
                  {video.id}
                </span>
                <span className="text-gray-700 hover:text-green-600 cursor-pointer">
                  {video.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

