import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-gray-900 placeholder-gray-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }
    setError('')
    // TODO: conectar con el backend de registro
    console.log('Register', form)
    navigate('/login')
  }

  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-16">
      {/* Blobs de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 right-10 h-64 w-64 rounded-full bg-violet-200 opacity-25 blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-indigo-200 opacity-25 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="w-full max-w-md animate-slide-up">
        {/* Cabecera */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/30">
            <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Crea tu cuenta</h1>
          <p className="mt-2 text-gray-500">Únete gratis en menos de un minuto</p>
        </div>

        {/* Tarjeta del formulario */}
        <div className="rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-xl shadow-gray-200/60 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-gray-700">Nombre</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input id="name" name="name" type="text" required placeholder="Tu nombre completo" value={form.name} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-700">Correo electrónico</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input id="email" name="email" type="email" required placeholder="tu@email.com" value={form.email} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            {/* Contraseña */}
            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-gray-700">Contraseña</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input id="password" name="password" type="password" required minLength={6} placeholder="Mínimo 6 caracteres" value={form.password} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            {/* Confirmar contraseña */}
            <div>
              <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-semibold text-gray-700">Confirmar contraseña</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <input id="confirmPassword" name="confirmPassword" type="password" required placeholder="Repite tu contraseña" value={form.confirmPassword} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-600">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-purple-500/50 active:scale-[0.98]"
            >
              Crear cuenta
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-700">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
