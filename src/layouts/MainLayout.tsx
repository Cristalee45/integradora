import { NavLink, Outlet } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
    isActive
      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
      : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
  }`

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-indigo-50/40">
      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="text-lg font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Integradora
            </span>
          </NavLink>

          <div className="flex items-center gap-1">
            <NavLink to="/" end className={linkClass}>
              Inicio
            </NavLink>
            <NavLink to="/login" className={linkClass}>
              Iniciar sesión
            </NavLink>
            <NavLink to="/register" className={linkClass}>
              Registrarse
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-gray-100 py-4 text-center text-xs text-gray-400">
        © 2025 Integradora · Todos los derechos reservados
      </footer>
    </div>
  )
}
