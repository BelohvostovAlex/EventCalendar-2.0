import React from 'react';
import { Form, Input, Button } from 'antd';
import { setAuth, setError, setLoading, setUser } from '../store/reducers/auth/authSlicer';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { rules } from '../utils/rules';
import axios from 'axios';
import { IUser } from '../models/IUser';
import { useAppSelector } from '../hooks/useAppSelector';

export const LoginForm = () => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const dispatch = useAppDispatch();
  

  const submit = () => {
    try {
      setTimeout(async () => {
        dispatch(setLoading(true));
        const { data } = await axios.get<IUser[]>('./users.json');
        const candidate = data.find(
          (user) => user.username === username && String(user.password) === password,
        );
        if (candidate) {
          dispatch(setAuth(true));
          dispatch(setLoading(false));
          dispatch(setUser({username,password}))
          localStorage.setItem('username', username)
          localStorage.setItem('pass', password)
        } else {
          dispatch(setError('Incorrect username or pass'));
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    }
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
      <h1 style={{ textAlign: 'center', color: 'red' }}>{isError && 'Incorrect username or pass'}</h1>
      <h1>{isLoading && 'Loading...'}</h1>
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
