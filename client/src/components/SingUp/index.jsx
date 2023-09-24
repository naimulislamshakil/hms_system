/* eslint-disable react-hooks/rules-of-hooks */
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import * as yup from 'yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import { tokens } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { messageClear, singup } from '../../store/Reducer/authReducer';
import { toast } from 'react-toastify';
import { PropagateLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const index = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { error, message, code, loading } = useSelector((state) => state.auth);
	const colors = tokens(theme.palette.mode);

	console.log({ error, message, code, loading });

	if (code === 200) {
		toast.success(message);
		navigate('/');
		messageClear();
	}

	if (code !== 200 && code !== null) {
		toast.error(error ? error : message);
		messageClear();
	}

	function Copyright(props) {
		return (
			<Typography
				variant="body2"
				color="text.secondary"
				align="center"
				{...props}
			>
				{'Copyright © '}
				<Link color="inherit" href="https://mui.com/">
					Your Website
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		);
	}

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema: userSchema,
			onSubmit: async (values) => {
				dispatch(singup(values));
			},
		});

	const overrideStyle = {
		display: 'flex',
		margin: '0 auto',
		height: '24px',
		justifyContent: 'center',
		alignItems: 'center',
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								color="secondary"
								autoComplete="given-name"
								name="firstName"
								value={values.firstName}
								onBlur={handleBlur}
								onChange={handleChange}
								error={!!touched.firstName && !!errors.firstName}
								helperText={touched.firstName && errors.firstName}
								required
								fullWidth
								id="firstNameName"
								label="firstName Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								color="secondary"
								required
								fullWidth
								id="lastNameName"
								label="lastName Name"
								name="lastName"
								value={values.lastName}
								onBlur={handleBlur}
								onChange={handleChange}
								error={!!touched.lastName && !!errors.lastName}
								helperText={touched.lastName && errors.lastName}
								autoComplete="family-name"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								color="secondary"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								value={values.email}
								onBlur={handleBlur}
								onChange={handleChange}
								error={!!touched.email && !!errors.email}
								helperText={touched.email && errors.email}
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								color="secondary"
								required
								fullWidth
								name="password"
								value={values.password}
								onBlur={handleBlur}
								onChange={handleChange}
								error={!!touched.password && !!errors.password}
								helperText={touched.password && errors.password}
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										style={{ color: colors.grey[100] }}
										value="allowExtraEmails"
										color="primary"
									/>
								}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						style={{
							color: colors.grey[100],
							background: colors.greenAccent[500],
						}}
					>
						{loading ? (
							<PropagateLoader color="#fff" cssOverride={overrideStyle} />
						) : (
							'Sing Up'
						)}
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="#" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	);
};

const initialValues = {
	email: '',
	password: '',
	firstName: '',
	lastName: '',
};

const regularExpression =
	/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const userSchema = yup.object().shape({
	email: yup.string().email('Invalid Email').required('Required'),
	password: yup
		.string()
		.matches(regularExpression, 'Password Not Valid')
		.required('Required'),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
});

export default index;
