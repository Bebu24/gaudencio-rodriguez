import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>¡Gracias por tu compra! 🎉</h1>
      <p>Tu pago se ha procesado con éxito.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Volver al inicio
      </Link>
    </div>
  );
}