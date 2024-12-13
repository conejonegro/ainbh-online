import Stripe from 'stripe';
import { NextResponse } from "next/server";

// Instancia de Stripe con la clave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
   const { amount, currency, metadata } = await request.json();

   try {
      // Crear un PaymentIntent en Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount, // El monto que deseas cobrar (en centavos)
        currency, // Ejemplo: 'usd'
        metadata, // Información adicional del pedido, como el ID de la orden
      });
  
      // Retornar el client_secret que se necesita en el cliente para confirmar el pago
      return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }


   const data = await request.json();
   return NextResponse.json({
    data,
  });
}
