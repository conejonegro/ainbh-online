import { NextResponse } from 'next/server'


  const cursos = [
    {
      id: 1,
      name: "Introducción a la comida Vegana",
      slug: "introduccion-comida-vegana",
      description:
        "En este curso aprenderás los principios básicos de la comida vegana, incluyendo los beneficios para la salud y el medio ambiente, y cómo crear deliciosas recetas veganas para cada comida.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/cineclub-forever.appspot.com/o/course-1.png?alt=media",
      duracion: "3 meses",
      precio: 500
    },
    {
      id: 2,
      name: "Nutrición y Bienestar Vegano",
      slug: "nutricion-bienestar-vegano",
      description:
        "Este curso se enfoca en cómo llevar una dieta vegana equilibrada, cubriendo nutrientes esenciales, planificación de comidas y cómo optimizar tu salud a través de la nutrición basada en plantas.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/cineclub-forever.appspot.com/o/course-2.png?alt=media",
      duracion: "2 meses",
      precio: 500
    },
    {
      id: 3,
      name: "Cocina Vegana Avanzada",
      slug: "avanzado-vegano",
      description:
        "Un curso diseñado para aquellos que ya tienen experiencia en la cocina vegana. Aprenderás técnicas avanzadas de preparación, presentación y cómo crear platos veganos gourmet.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/cineclub-forever.appspot.com/o/course-3.png?alt=media",
      duracion: "4 meses",
      precio: 499
    },
  ]
 
  export async function GET() {
    return NextResponse.json(cursos)
  }

 