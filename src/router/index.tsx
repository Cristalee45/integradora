import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.tsx'
import Home from '../pages/Home.tsx'
import Login from '../pages/Login.tsx'
import Register from '../pages/Register.tsx'
import NotFound from '../pages/NotFound.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
