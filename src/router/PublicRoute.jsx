import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext, LoginPage } from '../auth'

export const PublicRoute = () => {
    const { logged } = useContext(AuthContext)
  return ( !logged )
    ? <LoginPage />
    : <Navigate to="/" />
}
