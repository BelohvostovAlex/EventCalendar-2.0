import React from 'react';
import { Event } from '../pages/Event';
import { Login } from '../pages/Login';

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum pathesEnum {
  LOGIN = '/login',
  EVENT = '/',
}

export const publicRoutes: IRoute[] = [{ path: pathesEnum.LOGIN, element: Login }];

export const privateRoutes: IRoute[] = [{ path: pathesEnum.EVENT, element: Event }];
