import './App.css';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, SingUpPage, DashboardPage } from './Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [theme, colorMode] = useMode();
	const themes = useTheme();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<div>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/singup" element={<SingUpPage />} />
						<Route path="/dashboard" element={<DashboardPage />} />
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
