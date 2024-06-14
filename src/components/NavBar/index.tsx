import { Link, useLocation } from "react-router-dom"
import { Star } from "../Icons/Star"
import { ChevronRight } from "../Icons/ChevronRight"
import { ChevronLeft } from "../Icons/ChevronLeft"

interface NavBarProps {
  asideMenu: boolean
  setAsideMenu: (value: boolean) => void
  asideNotify: boolean
  setAsideNotify: (value: boolean) => void
}

function showActivePage(page: string) {
  switch (page) {
    case '/':
      return <Link to="/">Página inicial</Link>
    case '/customers':
      return <Link to="/customers">Clientes</Link>
    case '/sales':
      return <Link to="/sales">Vendas</Link>
    case '/customers/create':
      return <>
        <Link className="text-gray-500" to="/customers">Clientes</Link>
        <span className="text-gray-500">/</span>
        <Link to="/customers/create">Novo</Link>
      </>
    case '/products':
      return <Link to="/products">Produtos</Link>
    default:
      return 'Página não encontrada'
  }
}

export const NavBar = ({ asideMenu, setAsideMenu, asideNotify, setAsideNotify }: NavBarProps) => {
  const location = useLocation()
  const page = showActivePage(location.pathname)

  return (
    <nav className='w-full px-4 h-16 border-b border-light-background-tertiary flex justify-between items-center dark:border-dark-background-tertiary'>
      <div className='flex items-center gap-4'>
        <button onClick={() => setAsideMenu(!asideMenu)}>
          {asideMenu ? <ChevronRight /> : <ChevronLeft />}
        </button>
        <button>
          <Star />
        </button>
        <div className="font-light flex gap-4">
          <Link className="text-gray-500" to="/">Dashboard</Link>
          <span className="text-gray-500">/</span>
          {page}
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <button onClick={() => setAsideNotify(!asideNotify)}>
          {asideNotify ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>
    </nav>
  )
}