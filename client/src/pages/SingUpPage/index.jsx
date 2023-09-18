/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const Singup = lazy(() => import('../../components/SingUp/index.jsx'));

const index = () => {
	return <Singup />;
};

export default index;
