import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import Link from "next/link";

export default async function LeccionPage({ params }) {
  const {
    "curso-comprado": slugCurso,
    "slug-leccion": slugLeccion,
    "nombre-usuario": usuario,
  } = await params;

  const db = getFirestore(app);

  // 🔹 Traer la lección actual
  const leccionRef = doc(db, "cursos", slugCurso, "lecciones", slugLeccion);
  const leccionSnap = await getDoc(leccionRef);
  if (!leccionSnap.exists()) {
    return <div className="p-8">Lección no encontrada</div>;
  }
  const leccion = leccionSnap.data();

  // 🔹 Traer TODAS las lecciones del curso
  const leccionesRef = collection(db, "cursos", slugCurso, "lecciones");
  const leccionesSnap = await getDocs(leccionesRef);
  const leccionesData = leccionesSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const ordenadas = leccionesData.sort((a, b) =>
    a.titulo.localeCompare(b.titulo)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-medium text-center text-gray-500 mb-2">
        Curso para {usuario?.replaceAll("-", " ")}
      </h2>
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        {leccion.titulo}
      </h1>

      <div className="flex justify-start mb-8">
            <Link
              href={`/perfil/${usuario}/${slugCurso}`}
              className="mt-4 inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              ← Volver al inicio del curso
            </Link>
          </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna izquierda: video + contenido */}
        <div className="md:col-span-2 space-y-6">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            {leccion.videoURL ? (
              <iframe
                src={leccion.videoURL}
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            ) : (
              <span className="text-2xl text-gray-600">
                Sin video disponible
              </span>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-black">
              {leccion.titulo}
            </h2>
            <p className="text-gray-600">{leccion.descripcion}</p>
            <p className="text-sm text-gray-400 mt-2">
              Duración: {leccion.duracion} min
            </p>
          </div>

          
        </div>

        {/* Columna derecha: lista de lecciones */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-black">Lecciones</h3>
          <ul className="space-y-4">
            {ordenadas.map((item, index) => (
              <li key={item.id} className="flex items-center">
                <span className="w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                <Link
                  href={`/perfil/${usuario}/${slugCurso}/leccion/${item.id}`}
                  className={`hover:text-green-600 ${
                    item.id === slugLeccion
                      ? "font-bold text-green-800"
                      : "text-gray-700"
                  }`}
                >
                  {item.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
