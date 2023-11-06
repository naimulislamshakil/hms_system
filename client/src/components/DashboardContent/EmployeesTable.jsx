// import React from 'react';

import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	useTheme,
} from '@mui/material';
import employeesTable from '../../constants/EmployeesTable';
import { tokens } from '../../theme';

const EmployeesTable = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box bgcolor={colors.primary[400]} mt={5} mr={2} borderRadius={2}>
			<Box>
				<Typography
					variant="h4"
					color={colors.grey[100]}
					fontWeight="bold"
					sx={{ m: '0 0 5px 0' }}
					p={3}
				>
					Hospital Employees
				</Typography>
			</Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{employeesTable.map((row, i) => (
								<TableCell key={i} style={{ fontSize: '16px' }} align="center">
									{row}
								</TableCell>
							))}
						</TableRow>
					</TableHead>

					<TableBody>
						<TableCell>jh</TableCell>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default EmployeesTable;
