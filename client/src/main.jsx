import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/store.js';
import { HashLoader } from 'react-spinners';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Suspense
				fallback={
					<HashLoader
						color="#b71c1c"
						style={{ display: 'flex', alignItems: 'center' }}
					/>
				}
			>
				<App />
			</Suspense>
		</BrowserRouter>
	</Provider>
);
