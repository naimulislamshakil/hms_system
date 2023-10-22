import './App.css';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { LoginPage, SingUpPage, DashboardPage, Dashboard } from './Route';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { messageClear, persist } from './store/Reducer/authReducer';

function App() {
	const [theme, colorMode] = useMode();
	const themes = useTheme();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { code, loading, user, error, message } = useSelector(
		(state) => state.auth
	);
	const token = localStorage.getItem('accessToken');

	// console.log({ code, loading, user, error, message });

	useEffect(() => {
		dispatch(persist(token));
	}, [dispatch, token]);

	if (user && code === 200) {
		localStorage.setItem('user', JSON.stringify(user));
	}

	if (code !== 200 && code !== null) {
		toast.error(error ? error : 'You Are Not Logged In.');
		localStorage.removeItem('user');
		localStorage.removeItem('accessToken');
		navigate('/');
		messageClear();
	}

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<div>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/singup" element={<SingUpPage />} />
						<Route index path="/dashboard" element={<DashboardPage />}></Route>
					</Routes>
					<ToastContainer
						position="bottom-center"
						autoClose={6000}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme={themes.palette.mode === 'dark' ? 'dark' : 'light'}
					/>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
