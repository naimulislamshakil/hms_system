import { lazy } from 'react';

const LoginPage = lazy(() => import('./pages/LoginPage/index.jsx'));
const SingUpPage = lazy(() => import('./pages/SingUpPage/index.jsx'));

export { LoginPage, SingUpPage };
