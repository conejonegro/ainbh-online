"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // Redirigir al home si ya está autenticado
    }
  }, [status, router]);

  return (
    (<div className="flex min-h-screen">
      {/* Columna izquierda con imagen */}
      <div className="hidden lg:block w-1/2 bg-gray-100">
        <Image
          src="https://picsum.photos/700/700"
          alt="Imagen decorativa de comida vegana"
          width={720}
          height={720}
          className="h-full w-full object-cover"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      {/* Columna derecha con formulario */}
      <div className="flex w-full items-center justify-center lg:w-1/2 py-12 px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
          {/* Título */}

          {/* Botón de Google */}
          <div className="flex flex-col space-y-4 items-center">
            <p className="text-lg font-semibold text-black">Iniciar sesión con Google</p>
            <button
              onClick={() => signIn("google")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Iniciar sesión con Google
            </button>
          </div>

          {/* Formulario */}
          {/*
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4">
             
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Correo electrónico"
                />
              </div>

           
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

           
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Iniciar sesión
              </button>
            </div>
          </form>  */}

          {/* Enlace a registro */}
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/registro"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>)
  );
}
