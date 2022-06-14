import React from 'react'
import Layout from '../../layout/layout'
import { Tabs, Typography } from 'antd'
import { VariationsList } from './components'
import VariationsFavoriteList from './components/variations-favorite-list/variations-favorite-list'
import { VariationsFavoriteContextProvider } from './favorite-context'

interface props {}

const HomeScreen: React.FC<props> = () => {
  return (
    <Layout>
      <Typography.Title level={2}>Товары</Typography.Title>

      <VariationsFavoriteContextProvider>
        <Tabs defaultActiveKey={'list'} type={'card'}>
          <Tabs.TabPane tab={'Список'} key={'list'}>
            <VariationsList />
          </Tabs.TabPane>
          <Tabs.TabPane tab={'Избранное'} key={'fav'}>
            <VariationsFavoriteList />
          </Tabs.TabPane>
        </Tabs>
      </VariationsFavoriteContextProvider>
    </Layout>
  )
}

export default HomeScreen
