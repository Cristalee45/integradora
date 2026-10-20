import { Link } from 'react-router-dom'

const features = [
  { icon: '⚡', title: 'Rápido y eficiente', desc: 'Interfaz optimizada para maximizar tu productividad en cada tarea.' },
  { icon: '🔒', title: 'Seguro y confiable', desc: 'Tus datos protegidos con los más altos estándares de seguridad.' },
  { icon: '🌐', title: 'Acceso desde cualquier lugar', desc: 'Disponible en todos tus dispositivos, en cualquier momento.' },
]

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Blobs de fondo animados */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-purple-300 opacity-30 blur-3xl animate-blob" />
        <div className="absolute top-10 -right-20 h-80 w-80 rounded-full bg-indigo-300 opacity-30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 h-80 w-80 rounded-full bg-pink-300 opacity-25 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-28 text-center animate-slide-up">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
          <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          Plataforma integrada lista para usar
        </div>

        {/* Título principal */}
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
          Bienvenido a{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Integradora
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-500">
          La plataforma todo-en-uno que impulsa tu productividad. Comienza en segundos, sin complicaciones.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/login"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:scale-105 hover:shadow-indigo-500/50"
          >
            Iniciar sesión
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-indigo-200 bg-white/80 px-8 py-3.5 font-semibold text-indigo-600 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-indigo-400 hover:bg-indigo-50"
          >
            Crear cuenta gratis
          </Link>
        </div>

        {/* Tarjetas de características */}
        <div className="mt-24 grid gap-6 sm:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-100 bg-white/70 p-6 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-slide-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="mb-4 text-4xl">{f.icon}</div>
              <h3 className="font-bold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
