/* eslint-disable react/prop-types */
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';

const Card = ({ info }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	console.log(info);

	return (
		<Box bgcolor={colors.primary[400]}>
			<Grid container spacing={1} textAlign="end" alignItems="center">
				<Grid item xs={6}>
					<img
						src={info.icon}
						alt={info.text}
						style={{
							height: '50%',
							width: '50%',
							padding: '5px',
							borderRadius: '50%',
						}}
					/>
				</Grid>
				<Grid item xs={6} pr={2}>
					<Typography variant="h2" fontWeight="bold">
						{info.count}
					</Typography>
					<Typography variant="h5">{info.text}</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Card;
