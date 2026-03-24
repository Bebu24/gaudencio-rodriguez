import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as any,
});

export async function POST(req: Request) {
  try {
    const { title, price, image } = await req.json();
    
    // Obtenemos la URL base (prioriza la variable de entorno, si no usa el origen del request)
    const origin = process.env.NEXT_PUBLIC_URL || req.headers.get("origin");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: title,
              // Stripe requiere URLs de imagen válidas y públicas. 
              // Si usas localhost, a veces Stripe ignora la imagen, pero no rompe el pago.
              images: image ? [image] : [], 
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/libros`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Error detectado en Stripe API:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}