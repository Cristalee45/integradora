import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Bienvenido a Integradora
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Inicia sesión o crea una cuenta para comenzar.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/login"
          className="rounded-md bg-indigo-600 px-5 py-2.5 font-medium text-white hover:bg-indigo-700"
        >
          Iniciar sesión
        </Link>
        <Link
          to="/register"
          className="rounded-md border border-indigo-600 px-5 py-2.5 font-medium text-indigo-600 hover:bg-indigo-50"
        >
          Crear cuenta
        </Link>
      </div>
    </section>
  )
}
