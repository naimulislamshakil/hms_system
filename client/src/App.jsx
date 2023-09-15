import './App.css';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './Route';

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
					</Routes>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;