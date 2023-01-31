import { Outlet } from "react-router-dom"
import { AuthProvider } from "./auth/context/AuthProvider"
import { Navbar } from "./ui/components"


export const HeroesApp = () => {
  return (
    <>
        <Navbar />

        <main className="container">
          <Outlet />
        </main>
    </>
  )
}
