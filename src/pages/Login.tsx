import React from 'react';
import { Card, Layout } from 'antd';
import { LoginForm } from '../components/LoginForm';
import { Loader } from '../components/Loader';
import { useAppSelector } from '../hooks/useAppSelector';

export const Login: React.FC = () => {
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  return (
    <Layout
      style={{
        height: 'calc(100vh - 128px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Card>
        <LoginForm />
      </Card>
      {isLoading && <Loader />}
    </Layout>
  );
};
