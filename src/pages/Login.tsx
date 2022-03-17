import React from 'react';
import { Layout } from 'antd';
import { LoginForm } from '../components/LoginForm';

export const Login: React.FC = () => {
  return (
    <Layout style={{height: 'calc(100vh - 128px)', display:"flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <LoginForm />
    </Layout>
  );
};
