import { Outlet } from "react-router-dom"

export const MainContainer = () => {
  return (
    <main className="
      w-full min-h-screen bg-light-background-primary
      dark:bg-dark-background-primary dark:text-white
    ">
      <Outlet />
    </main>
  )
}