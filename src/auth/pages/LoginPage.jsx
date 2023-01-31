import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate()

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Ces Guillen')

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />

      <button onClick={ onLogin } className='btn btn-primary'>Login</button>
    </div>
  )
}
