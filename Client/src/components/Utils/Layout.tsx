import { Outlet } from "react-router"
import { Header } from "./Header"
import { ScrollToTopButton } from "./ScrollToTopButton"

export const Layout = () => {
  return (
    <div className="">
    <Header />
    <ScrollToTopButton />
    <main>
      <Outlet />
    </main>
    </div>
  )
}
