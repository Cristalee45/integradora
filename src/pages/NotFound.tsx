import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="mt-4 text-lg text-gray-600">Página no encontrada</p>
      <Link to="/" className="mt-6 inline-block font-medium text-indigo-600 hover:underline">
        Volver al inicio
      </Link>
    </section>
  )
}
