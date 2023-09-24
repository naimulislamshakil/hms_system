import { lazy } from 'react';

const LoginPage = lazy(() => import('./pages/LoginPage/index.jsx'));
const SingUpPage = lazy(() => import('./pages/SingUpPage/index.jsx'));
const DashboardPage=lazy(()=>import("./pages/Dashboard/index.jsx"))

export { LoginPage, SingUpPage, DashboardPage };
