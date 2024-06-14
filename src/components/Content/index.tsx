import { useState } from "react"
import { Aside } from "../Aside"
import { NavBar } from "../NavBar"
import { Outlet } from "react-router-dom"

export const Content = () => {
  const [asideMenu, setAsideMenu] = useState(true)
  const [asideNotify, setAsideNotify] = useState(false)

  return (
    <div className="w-screen min-h-screen flex">
      <Aside className={asideMenu ? '' : 'hidden'} />
      <div className={asideMenu ? 'w-5/6 ml-[16.666667%]' : 'w-full'}>
        <NavBar
          asideMenu={asideMenu}
          setAsideMenu={setAsideMenu}
          asideNotify={asideNotify}
          setAsideNotify={setAsideNotify}
        />
        <div className="p-4 flex flex-col justify-between">
          <Outlet />
        </div>
      </div>
    </div>
  )
}