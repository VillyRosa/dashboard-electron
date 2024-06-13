import { Link } from "react-router-dom"
import { Button } from "../Button"
import { useAuthContext } from "../../context/Auth"

export const Aside = () => {
  const auth = useAuthContext()
  const user = auth.user

  return (
    <aside className="w-1/6 h-screen p-4 border-r border-gray-300">
      <Link to="/">
        LOGO
      </Link>
      <p>{user?.name}</p>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Button onClick={() => auth.setUser(null)}>Logout</Button>
        </li>
      </ul>
    </aside>
  )
}