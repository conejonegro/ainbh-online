"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function PerfilUsuario() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>No estás autenticado. Por favor inicia sesión.</div>;
  }

  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: "/",
    });
  };

  const userName = session.user.name;
  const miCursoComprado = "mi-primer-curso"
  console.log("miperfil", userName)

  const userNameSlug = userName.replaceAll(" ", "-")

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6 bg-white rounded-lg shadow-lg p-8">
        {/* Encabezado de la página */}
      

        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between mb-8">
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <div className="relative w-32 h-32 mb-4">
              {/* Imagen de perfil */}
              <Image
                src={session?.user?.image || "https://via.placeholder.com/150"}
                alt="Imagen de perfil"
                className="rounded-full w-full h-full object-cover border-4 border-green-500"
                width={200}
                height={100}
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">{session?.user?.name}</h2>
            <p className="text-gray-500">{session?.user?.email}</p>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-4xl font-semibold text-gray-800">Perfil de Usuario</h1>
            <p className="text-gray-600 mt-2">Aquí puedes Confirmar tus datos y acceder a más opciones de configuración.</p>
            <div>
              <h2 className="text-4xl mt-8 text-black font-bold">Tus Cursos:</h2>
              <div>
                <ul className="text-blue-950">
                 <li className="ml-4 mt-2"> <Link href={`${process.env.NEXT_PUBLIC_API_URL}/perfil/${userNameSlug}/${miCursoComprado}`}> Vegana avanzada</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-start mt-8 space-x-6">
          <button
            type="button"
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
