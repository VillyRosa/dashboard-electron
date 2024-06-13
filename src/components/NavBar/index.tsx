import { useLocation } from "react-router-dom"

function showActivePage(page: string) {
  switch (page) {
    case '/':
      return 'Página inicial'
    case '/clients':
      return 'Clientes'
    default:
      return 'Página não encontrada'
  }
}

export const NavBar = () => {
  const location = useLocation()
  const page = showActivePage(location.pathname)

  return (
    <nav className="w-full p-4 border-b border-gray-300">
      <div>
        <span>Dashboard</span>
        <span> / </span>
        <span>{page}</span>
      </div>
    </nav>
  )
}