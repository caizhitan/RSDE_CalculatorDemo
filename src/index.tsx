import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './Auth/authConfig';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const msalInstance = new PublicClientApplication(msalConfig);
root.render(
	<React.StrictMode>
		<MsalProvider instance={msalInstance}>
			<App />
		</MsalProvider>
	</React.StrictMode>
);
