import { Outlet } from "react-router"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

export const Layout = () => {
  return (
    <>
    <Header />
    <Sidebar />
    <main>
      <Outlet />
    </main>
    </>
  )
}
