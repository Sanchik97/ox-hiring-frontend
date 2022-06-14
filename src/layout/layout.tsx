import React, { useContext } from 'react'
import { Button, Col, Layout as AntdLayout, Row, Typography } from 'antd'
import './layout.css'
import { Container } from '../shared'
import { AuthContext } from '../context/auth'

interface props {
  children?: React.ReactNode
}

const Layout: React.FC<props> = ({ children }) => {
  const { handleRemoveToken } = useContext(AuthContext)

  return (
    <AntdLayout className={'layout'}>
      <AntdLayout.Header className={'layout__header'}>
        <Typography.Title className={'layout__logo'} level={5}>
          OX HIRING | FRONTEND
        </Typography.Title>
        <Button
          className={'layout__logout'}
          type={'default'}
          ghost
          danger
          onClick={handleRemoveToken}
        >
          Выйти
        </Button>
      </AntdLayout.Header>
      <AntdLayout.Content className="site-layout layout__content">
        <Container>{children}</Container>
      </AntdLayout.Content>
    </AntdLayout>
  )
}

export default Layout
