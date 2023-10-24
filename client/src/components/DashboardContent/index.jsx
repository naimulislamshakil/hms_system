// import React from 'react';
import Header from '../Header/index';

import { Box, Grid } from '@mui/material';
import Card from './Card';
import out from '../../assets/medical-checkup.png';
import inp from '../../assets/cancer.png';
import employees from '../../assets/division.png';

const index = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	const cardInfo = [
		{
			icon: out,
			text: 'Out Patients',
			count: 1,
		},
		{
			icon: inp,
			text: 'In Patients',
			count: 4,
		},
		{
			icon: employees,
			text: 'Hospital Employees',
			count: 3,
		},
		{
			icon: out,
			text: 'Out Patients',
			count: 1,
		},
		{
			icon: out,
			text: 'Out Patients',
			count: 1,
		},
		{
			icon: out,
			text: 'Out Patients',
			count: 1,
		},
	];
	return (
		<Box>
			<Header
				title="DASHBOARD"
				subtitle={`Welcome to ${user?.role} Dashboard.`}
			/>

			<Box>
				<Grid container spacing={2} pr={2}>
					{cardInfo.map((info, i) => (
						<Grid item xs={4} key={i}>
							<Card info={info} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default index;
