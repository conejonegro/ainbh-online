import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import Link from "next/link";

export default async function PurchasedCoursePage({ params }) {
  const slug = params["curso-comprado"];
  const user = params["nombre-usuario"];

  if (!slug) {
    return <div className="p-8">Slug no encontrado en la URL.</div>;
  }

  const db = getFirestore(app);

  // 🔍 Curso
  const cursoRef = doc(db, "cursos", slug);
  const cursoSnap = await getDoc(cursoRef);
  if (!cursoSnap.exists()) {
    return <div className="p-8">Curso no encontrado</div>;
  }
  const curso = cursoSnap.data();

  // 🔍 Lecciones
  const leccionesRef = collection(cursoRef, "lecciones");
  const leccionesSnap = await getDocs(leccionesRef);
  const lessons = leccionesSnap.docs.map((doc) => doc.data());
  const ordenadas = lessons.sort((a, b) => a.titulo.localeCompare(b.titulo));
  const primeraLeccion = ordenadas[0];

  if (!primeraLeccion) {
    return <div className="p-8">No hay lecciones disponibles</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-medium text-center text-gray-500 mb-2">
        Curso para {user?.replaceAll("-", " ")}
      </h2>
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        {curso.nombre}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            {primeraLeccion.videoURL ? (
              <iframe
                src={primeraLeccion.videoURL}
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            ) : (
              <span className="text-2xl text-gray-600">
                Reproductor de Video
              </span>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-black">
              {primeraLeccion.titulo}
            </h2>
            <p className="text-gray-600">{primeraLeccion.descripcion}</p>
            <p className="text-sm text-gray-400 mt-2">
              Duración: {primeraLeccion.duracion} min
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-black">Lecciones</h3>
          <ul className="space-y-4">
            {ordenadas.map((lesson, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                <Link
                  href={`/perfil/${user}/${slug}/leccion/${lesson.slug}`}
                  className="hover:text-green-700"
                >
                  {lesson.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
