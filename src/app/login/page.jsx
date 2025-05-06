"use client";

import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [tipoUsuario, setTipoUsuario] = useState("cliente"); // 'cliente' o 'estudiante'
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // Redirige si ya está logueado
    }
  }, [status, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Iniciar Sesión
        </h2>

        {/* Selector de tipo de usuario */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setTipoUsuario("estudiante")}
            className={`px-4 py-2 rounded ${
              tipoUsuario === "estudiante"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Estudiante de la Academia
          </button>
          <button
            onClick={() => setTipoUsuario("cliente")}
            className={`px-4 py-2 rounded ${
              tipoUsuario === "cliente"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Cliente Online
          </button>
        </div>

        {/* Login para Estudiantes */}
        {tipoUsuario === "estudiante" && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Iniciar Sesión
            </button>
          </form>
        )}

        {/* Login con Google para Clientes */}
        {tipoUsuario === "cliente" && (
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-700">Iniciar sesión con Google</p>
            <button
              onClick={() => signIn("google")}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Iniciar con Google
            </button>
          </div>
        )}

        {/* Enlace a registro */}
        <p className="text-center text-sm text-gray-600">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/registro"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}
