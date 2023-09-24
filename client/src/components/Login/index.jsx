/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { tokens } from '../../theme';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { login, messageClear } from '../../store/Reducer/authReducer';
import { PropagateLoader } from 'react-spinners';
// import React from 'react';

const index = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { error, message, token, loading, code, user } = useSelector(
		(state) => state.auth
	);

	console.log({ error, message, token, loading, code, user });

	if (code === 200) {
		toast.success(message);
		navigate('/dashboard');
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
				dispatch(login(values));
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
					Sign in
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						color="secondary"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						value={values.email}
						onBlur={handleBlur}
						onChange={handleChange}
						error={!!touched.email && !!errors.email}
						helperText={touched.email && errors.email}
						autoFocus
					/>
					<TextField
						color="secondary"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						value={values.password}
						onBlur={handleBlur}
						onChange={handleChange}
						error={!!touched.password && !!errors.password}
						helperText={touched.password && errors.password}
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={
							<Checkbox value="remember" style={{ color: colors.grey[100] }} />
						}
						label="Remember me"
					/>
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
							'Sing In'
						)}
					</Button>
					<Grid container>
						<Grid item xs>
							<Link
								to={'/'}
								variant="body2"
								style={{ color: colors.grey[100] }}
							>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link
								to={'/singup'}
								variant="body2"
								style={{ color: colors.grey[100] }}
							>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	);
};

const initialValues = {
	email: '',
	password: '',
};

const regularExpression =
	/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const userSchema = yup.object().shape({
	email: yup.string().email('Invalid Email').required('Required'),
	password: yup
		.string()
		.matches(regularExpression, 'Password Not Valid')
		.required('Required'),
});

export default index;
