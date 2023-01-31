import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"
import { HeroesApp } from "../HeroesApp"

export const PrivateRoute = () => {
    const { logged } = useContext( AuthContext )
  return ( logged )
    ? <HeroesApp />
    : <Navigate to="/login" />
}
