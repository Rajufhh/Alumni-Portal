import { Outlet } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

export const Layout = () => {
  return (
    <>
    <Header />
    <Sidebar />
    <Outlet />
    <Footer />
    </>
  )
}
