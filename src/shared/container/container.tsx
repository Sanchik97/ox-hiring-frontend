import React from 'react'
import './container.css'

interface props {
  children?: React.ReactNode
}

const Container: React.FC<props> = ({ children }) => {
  return <div className={'container'}>{children}</div>
}

export default Container
