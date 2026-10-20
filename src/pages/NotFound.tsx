import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-20">
      {/* Blobs de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-indigo-200 opacity-20 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-200 opacity-20 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="text-center animate-slide-up">
        <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-9xl font-extrabold text-transparent">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Página no encontrada</h1>
        <p className="mt-3 max-w-sm text-gray-500">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:scale-105 hover:shadow-indigo-500/50"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
