import React from 'react'
import { AppRouter } from './components/AppRouter'
import { Navbar } from './components/Navbar'
import { Layout } from 'antd'
import { useAppDispatch } from './hooks/useAppDispatch'
import { setAuth, setUser } from './store/reducers/auth/authSlicer'
import { IUser } from './models/IUser'


export const App: React.FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if(localStorage.getItem('username') && localStorage.getItem('auth')) {
      const username = localStorage.getItem('username')
      dispatch(setUser({username, password: ''} as IUser))
      dispatch(setAuth(true))
    }  
  }, [])
  
  return (
    <Layout>
    <Navbar />
    <Layout.Content style={{margin: '64px'}}>
      <AppRouter />
    </Layout.Content>
    </Layout>
  )
}
