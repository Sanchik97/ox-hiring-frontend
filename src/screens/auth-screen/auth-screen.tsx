import React from 'react'
import { AuthForm } from './components'
import { Container } from '../../shared'

interface props {}

const AuthScreen: React.FC<props> = () => {
  return (
    <Container>
      <AuthForm />
    </Container>
  )
}

export default AuthScreen
