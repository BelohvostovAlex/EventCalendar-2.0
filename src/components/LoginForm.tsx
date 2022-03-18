import React from 'react';
import { Form, Input, Button } from 'antd';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { rules } from '../utils/rules';
import { useAppSelector } from '../hooks/useAppSelector';
import { login } from '../store/reducers/auth/authLoginThunk';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const dispatch = useAppDispatch();

  const submit = () => {
    dispatch(login({ username, password }));
  };

  const { isError, isLoading } = useAppSelector((state) => state.auth);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={submit}
      onFinishFailed={() => console.log('finish failed')}
      autoComplete="off">
      <h1 style={{ textAlign: 'center' }}>Login form</h1>
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        {isError && 'Incorrect username or pass'}
      </h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}>
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
