import { FormEvent, useState } from "react"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { useAuthContext } from "../../context/Auth"
import { IUser } from "../../interfaces/IUser"
import AuthProvider from "../../providers/AuthProvider"

export default function Login() {
  const auth = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    await AuthProvider.login({ email, password })
      .then((response: any) => {
        if (response.hasOwnProperty('message')) {
          alert(response.message)
        } else {
          auth.setUser(response as IUser)
        }
      })
      .catch((error) => { 
        console.log(error)
        alert('Erro ao tentar efetuar login')
      })
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className="w-11/12 p-4 bg-light-background-secondary border rounded-md flex flex-col gap-4 md:w-2/3 lg:w-1/3 dark:bg-dark-background-secondary dark:text-white"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <h1 className="w-full text-center text-3xl font-semibold">Login</h1>
          <p className="w-full text-center">Entre com seus dados</p>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            label="E-mail"
            id="email"
            name="email"
            type="email"
            required
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            required
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  )
}