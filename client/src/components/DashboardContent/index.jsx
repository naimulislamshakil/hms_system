// import React from 'react';
import Header from '../Header/index';

import { Box } from '@mui/material';

const index = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	return (
		<Box>
			<Header
				title="DASHBOARD"
				subtitle={`Welcome to ${user?.role} Dashboard.`}
			/>
		</Box>
	);
};

export default index;
