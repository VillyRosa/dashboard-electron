import { Link, useLocation } from "react-router-dom";

interface IAsideLink {
  to?: string
  children: React.ReactNode
  onClick?: () => void
}

export const AsideLink = ({ to, children, onClick }: IAsideLink) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link 
      className={`
        w-full py-1 rounded-lg flex items-center gap-2 transition-colors duration-200 overflow-hidden text-nowrap text-ellipsis
        ${isActive ? 'bg-light-background-secondary dark:bg-dark-background-secondary' : 'hover:bg-light-background-secondary dark:hover:bg-dark-background-secondary'}
      `}
      to={to || '#'}
      onClick={onClick}
    >
      {isActive && <div className="w-1 h-5 bg-black rounded-full absolute dark:bg-primary-purple" />}
      <div className="px-4 flex gap-2">
        {children}
      </div>
    </Link>
  )
}