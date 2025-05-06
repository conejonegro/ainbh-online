"use client";

import React, { useState, useEffect,  } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "next/navigation";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

//Fetch Data from API Server


// Cargar Stripe con la clave pública
const stripePromise = loadStripe(
  "pk_test_51QUzDIDZC923TJqPUleeo9KV41EkA6oIUXwcj42SQ4y5WvrulvUcYW6cNtmalsOtlOHsju8l65chHq23kBID80SD00HtpeKCyN"
);

 function PaymentFormContent({ onPaymentSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [dataFromNextAPI, setdataFromNextAPI] = useState();
  const [myFoundCourse, setMyFoundCourse] = useState();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
  });

  const UrlParams = useParams();

  console.log("UrlParams", UrlParams);

  const isLocalhost = window.location.origin.includes("localhost:3000");
  const API_URL = isLocalhost
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
   async function fetchCursos() {
      
    
      const res = await fetch(`${API_URL}/api/cursos/`);
      if (!res.ok) {
        throw new Error("Failed to fetch cursos");
      }
      //setdataFromNextAPI(res.json());
      const dataFronNExtAPI = await res.json();
      console.log("dataFronNExtAPI", dataFronNExtAPI);

      setdataFromNextAPI(dataFronNExtAPI)
      
    }
   fetchCursos()
   
  },[])

  const myCourseData = dataFromNextAPI?.find((mycourse) => mycourse.slug === UrlParams.slug)

  console.log("myCourseData", myCourseData);


  // Manejar cambios en los campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validaciones
    if (!stripe) {
      console.error("Stripe no está inicializado");
      setError("Stripe no está disponible");
      return;
    }

    const cardElement = elements?.getElement(CardElement);

    if (!cardElement) {
      console.error("Elemento de tarjeta no encontrado");
      setError("No se pudo obtener el elemento de la tarjeta");
      return;
    }

    // Validar campos obligatorios
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.country
    ) {
      setError("Por favor complete todos los campos");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Crea un PaymentIntent en el servidor
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: myCourseData.precio * 100, // Enviar monto en centavos
          currency: "usd",
          customerInfo: formData,
        }),
      });

      const { clientSecret } = await res.json();

      // Confirmar el pago
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: `${formData.firstName} ${formData.lastName}`,
              email: formData.email,
              phone: formData.phone,
              address: {
                country: formData.country,
              },
            },
          },
        }
      );

      if (error) {
        console.error("Error de pago:", error);
        setError(error.message);
      } else if (paymentIntent.status === "succeeded") {
        console.log("Pago exitoso:", paymentIntent);
        onPaymentSuccess(formData); // Pasar información del cliente
      }
    } catch (err) {
      console.error("Error en el proceso de pago:", err);
      setError("Hubo un problema procesando el pago");
    } finally {
      setIsProcessing(false);
    }
  };


  console.log( "hubo", myCourseData)

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
              Sabemos lo importante que es para ti sentirte seguro al realizar
              una compra en línea. Por eso, usamos lenguajes de programación
              modernos y adecuados que garantizan la máxima protección de tus
              datos. Además, trabajamos con plataformas de pago verificadas en
              México y reconocidas internacionalmente, asegurando que cada
              transacción sea 100% segura. Queremos que tu experiencia de compra
              sea tranquila y sin preocupaciones. Puedes confiar en que tu
              información está protegida en cada paso. ¡Tu seguridad está en
              buenas manos con nosotros!
            </p>
          </div>

          {/* Resumen del curso */}
          <h2 className="text-xl font-semibold mb-4">Resumen del Curso</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Curso:</span> {myCourseData?.name}
            </p>
            <p>
              <span className="font-medium">Instructor:</span>{" "}
              {myCourseData?.maestro}
            </p>
            <p>
              <span className="font-medium">Duración:</span>{" "}
              {myCourseData?.duracion}
            </p>
            <p className="text-2xl font-bold">Total: ${myCourseData?.precio}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto"
        >
          {/* Campos de información personal */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Apellido
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              País
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Selecciona un país</option>
              <option value="US">Estados Unidos</option>
              <option value="MX">México</option>
              <option value="CA">Canadá</option>
              <option value="ES">España</option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CL">Chile</option>
              <option value="PE">Perú</option>
              <option value="BR">Brasil</option>
              <option value="OTHER">Otro</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Número de Tarjeta
            </label>
            <CardElement
              id="cardNumber"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#32325d",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                },
              }}
            />
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {isProcessing ? "Procesando..." : `Pagar $${myCourseData?.precio}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function PaymentForm() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [customerInfo, setCustomerInfo] = useState(null);

  return (
    <div>
      <Elements stripe={stripePromise}>
        {paymentSuccess ? (
          <div className="text-green-600 text-center p-4 bg-green-50 rounded-lg">
            <h2 className="text-xl font-bold mb-2">¡Pago Exitoso!</h2>
            <p>
              Gracias, {customerInfo.firstName} {customerInfo.lastName}
            </p>
            <p>Ahora puedes ver tu Curso en tu Perfil {customerInfo.email}</p>
          </div>
        ) : (
          <PaymentFormContent
            onPaymentSuccess={(info) => {
              setPaymentSuccess(true);
              setCustomerInfo(info);
            }}
          />
        )}
      </Elements>
    </div>
  );
}
