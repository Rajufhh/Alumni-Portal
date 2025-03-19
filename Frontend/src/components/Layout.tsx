import { Outlet } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
