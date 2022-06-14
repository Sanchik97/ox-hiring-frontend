import React, { useContext } from 'react'
import { AuthContext } from './context/auth'
import { AuthScreen, HomeScreen } from './screens'

function App() {
  const { token } = useContext(AuthContext)
  return <div>{token ? <HomeScreen /> : <AuthScreen />}</div>
}

export default App
