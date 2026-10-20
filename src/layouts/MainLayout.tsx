import { NavLink, Outlet } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
  }`

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          <NavLink to="/" className="text-lg font-bold text-indigo-600">
            Integradora
          </NavLink>
          <div className="flex gap-2">
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
    </div>
  )
}
