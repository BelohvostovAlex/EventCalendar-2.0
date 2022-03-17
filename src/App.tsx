import React from 'react'
import { AppRouter } from './components/AppRouter'
import { Navbar } from './components/Navbar'
import { Layout } from 'antd'

export const App: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content style={{margin: '64px'}}>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}
