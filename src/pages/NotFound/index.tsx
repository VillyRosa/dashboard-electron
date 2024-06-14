import { Link } from "react-router-dom"
import { Button } from "../../components/Button"

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl">404</h1>
      <h2 className="text-4xl">Página não encontrada</h2>
      <Link 
        className="mt-8" 
        to="/"
      >
        <Button>Voltar ao Sistema</Button>
      </Link>
    </main>
  )
}