import { Layout, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { setAuth } from '../store/reducers/auth/authSlicer';
import { useAppDispatch } from '../hooks/useAppDispatch';

export const Navbar: React.FC = () => {
  const {isAuth, user} = useAppSelector(state => state.auth)
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'end' }}>
        {isAuth ? (
          <>
            <div className="logo" style={{ color: 'white', marginRight: '10px' }}>
              {`Welcome back: ${user.username}`}
            </div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key="1" onClick={() => dispatch(setAuth(false))}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false} style={{width: '100%', display:'flex', justifyContent: 'flex-end'}}>
              <Menu.Item key="1" onClick={() => navigate('/login')}>
                Login
              </Menu.Item>
            </Menu>
          </>
        )}
      </Header>
    </Layout>
  );
};
