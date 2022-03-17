import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { publicRoutes, privateRoutes, pathesEnum } from '../router';

export const AppRouter = () => {
  const {isAuth} = useAppSelector(state => state.auth)

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path='/*' element={<Navigate to={pathesEnum.EVENT} />}/>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path='/*' element={<Navigate to={pathesEnum.LOGIN} />}/>
    </Routes>
  );
};
