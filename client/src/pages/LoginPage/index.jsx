/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const Login = lazy(() => import('../../components/Login/index.jsx'));

const index = () => {
	return <Login />;
};

export default index;
