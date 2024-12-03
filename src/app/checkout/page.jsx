"use client";

import { useState } from "react";
import useForm from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  address: z
    .string()
    .min(5, { message: "La dirección debe tener al menos 5 caracteres." }),
  city: z
    .string()
    .min(2, { message: "La ciudad debe tener al menos 2 caracteres." }),
  country: z.string().min(2, { message: "Por favor, selecciona un país." }),
  cardNumber: z.string().regex(/^\d{16}$/, {
    message: "El número de tarjeta debe tener 16 dígitos.",
  }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "La fecha de expiración debe tener el formato MM/YY.",
  }),
  cvv: z
    .string()
    .regex(/^\d{3,4}$/, { message: "El CVV debe tener 3 o 4 dígitos." }),
});

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  /*  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema)
  }) */

  const onSubmit = (data) => {
    console.log(data);
    // Aquí iría la lógica para procesar el pago
  };

  // Datos estáticos del curso
  const courseData = {
    title: "Fundamentos de la Nutrición Vegana",
    instructor: "Dra. María Rodríguez",
    duration: "8 semanas",
    price: 99.99,
  };

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        Finalizar Compra
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información del curso */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Mensaje de seguridad */}
          <div className="bg-green-50 p-4 rounded-md border border-green-200 mb-6">
            <p className="text-gray-700 text-sm">
              <strong className="block text-green-700 mb-2">
                Tu Seguridad, Nuestra Prioridad
              </strong>
              Sabemos lo importante que es para ti sentirte seguro al realizar una compra en línea. Por eso, usamos lenguajes de programación modernos y adecuados que garantizan la máxima protección de tus datos. Además, trabajamos con plataformas de pago verificadas en México y reconocidas internacionalmente, asegurando que cada transacción sea 100% segura.

              Queremos que tu experiencia de compra sea tranquila y sin preocupaciones. Puedes confiar en que tu información está protegida en cada paso. ¡Tu seguridad está en buenas manos con nosotros!
            </p>
          </div>

          {/* Resumen del curso */}
          <h2 className="text-xl font-semibold mb-4">Resumen del Curso</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Curso:</span> {courseData.title}
            </p>
            <p>
              <span className="font-medium">Instructor:</span>{" "}
              {courseData.instructor}
            </p>
            <p>
              <span className="font-medium">Duración:</span>{" "}
              {courseData.duration}
            </p>
            <p className="text-2xl font-bold">Total: ${courseData.price}</p>
          </div>
        </div>

        {/* Formulario de checkout */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Información de Pago</h2>
          <form className="space-y-6 p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre Completo
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dirección
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Ingresa tu dirección"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              <div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ciudad
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Ciudad"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <fieldset>
              <legend className="text-sm font-medium text-gray-700 mb-2">
                Método de Pago
              </legend>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="credit"
                    name="paymentMethod"
                    value="credit"
                    defaultChecked
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <label
                    htmlFor="credit"
                    className="ml-3 block text-sm text-gray-700"
                  >
                    Tarjeta de Crédito
                  </label>
                </div>
               
              </div>
            </fieldset>

            {paymentMethod === "credit" && (
              <>
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Número de Tarjeta
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="expiryDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Fecha de Expiración (MM/YY)
                    </label>
                    <input
                      id="expiryDate"
                      type="text"
                      placeholder="MM/YY"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVV
                    </label>
                    <input
                      id="cvv"
                      type="text"
                      placeholder="***"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Pagar ${courseData.price}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
