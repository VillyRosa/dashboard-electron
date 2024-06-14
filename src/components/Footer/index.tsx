import { Link } from "react-router-dom"

export const Footer = () => {
  const date = new Date()

  return (
    <footer className="w-full flex justify-between items-center">
      <span>&copy; {date.getFullYear()}</span>
      <div className="flex gap-4">
        <Link to="/about">Sobre</Link>
        <Link to="/support">Suporte</Link>
        <Link to="/contact">Contato</Link>
      </div>
    </footer>
  )
}