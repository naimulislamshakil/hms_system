import { lazy } from 'react';
import DashboardContent from './components/DashboardContent/index.jsx';
import RegisterPatient from "./components/Patients/index.jsx"

const LoginPage = lazy(() => import('./pages/LoginPage/index.jsx'));
const SingUpPage = lazy(() => import('./pages/SingUpPage/index.jsx'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/index.jsx'));
const Dashboard = lazy(() => import('./components/Dashboard/index.jsx'));

export { LoginPage, SingUpPage, DashboardPage, Dashboard, DashboardContent,RegisterPatient };
