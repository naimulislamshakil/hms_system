// import React from 'react';
import Header from '../Header/index';

import { Box, Grid } from '@mui/material';
import Card from './Card';
import out from '../../assets/medical-checkup.png';
import inp from '../../assets/cancer.png';
import employees from '../../assets/division.png';
import vendors from '../../assets/seller.png';
import assets from '../../assets/pharmaceutical cup.png';
import pharmaceutical from '../../assets/pharmaceutical.png';
import EmployeesTable from './EmployeesTable';

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
			icon: vendors,
			text: 'Vendors',
			count: 1,
		},
		{
			icon: assets,
			text: 'Corporation Assets',
			count: 2,
		},
		{
			icon: pharmaceutical,
			text: 'Pharmaceuticals',
			count: 3,
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

			<EmployeesTable />
		</Box>
	);
};

export default index;
