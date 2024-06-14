import { useAuthContext } from "../../context/Auth"
import { ArrowLeftEndOnRectangle } from "../Icons/ArrowLeftEndOnRectangle"
import { Cash } from "../Icons/Cash"
import { ChartPie } from "../Icons/ChartPie"
import { InboxStack } from "../Icons/InboxStack"
import { Settings } from "../Icons/Settings"
import { Users } from "../Icons/Users"
import { AsideLink } from "./AsideLink"
import { AuthUserAside } from "./AuthUserAside"

interface AsideProps {
  className?: string
}

export const Aside = ({ className }: AsideProps) => {
  const auth = useAuthContext()

  return (
    <aside className={`
      w-1/6 h-screen fixed p-6 border-r border-light-background-tertiary flex flex-col justify-between items-start dark:border-dark-background-tertiary
      ${className}
    `}>
      {/* Top links */}
      <div className="w-full flex flex-col gap-6">
        { auth.user && <AuthUserAside user={auth.user} /> }
        {/* Dashboard links */}
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-gray-400">Dashboards</h3>
          <AsideLink to="/">
            <ChartPie />
            Inicial
          </AsideLink>
        </div>
        {/* Company links */}
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-gray-400">Empresa</h3>
          <AsideLink to="/sales">
            <Cash />
            Vendas
          </AsideLink>
          <AsideLink to="/customers">
            <Users />
            Clientes
          </AsideLink>
          <AsideLink to="/products">
            <InboxStack />
            Produtos
          </AsideLink>
        </div>
        {/* System links */}
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-gray-400">Sistema</h3>
          <AsideLink to="/settings">
            <Settings />
            Configurações
          </AsideLink>
        </div>
      </div>
      {/* Bottom links */}
      <div className="w-full pt-2 bottom-0 border-t border-light-background-tertiary lg:pt-4 dark:border-dark-background-tertiary">
        <AsideLink onClick={() => auth.setUser(null)}>
          <ArrowLeftEndOnRectangle />
          Sair
        </AsideLink>
      </div>
    </aside>
  )
}