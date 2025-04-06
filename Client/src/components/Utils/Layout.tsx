import { Outlet } from "react-router"
import { Header } from "./Header"
import { ScrollToTopButton } from "./ScrollToTopButton"
import { Footer } from "./Footer"

export const Layout = () => {
  return (
    <div className="">
    <Header />
    <ScrollToTopButton />
    <main>
      <Outlet />
    </main>
    <Footer />
    </div>
  )
}
