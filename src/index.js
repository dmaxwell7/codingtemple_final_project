import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const domain = 'dev-4bo5gb6vta37110o.us.auth0.com'
// const clientId ='efZG7Tm8u0DV5hReLbWXacg8NwUdNaju'

const domain= process.env.REACT_APP_AUTH0_DOMAIN;
const clientId= process.env.REACT_APP_AUTH0_CLIENT_ID;


root.render(
  // <React.StrictMode>
  <Auth0Provider 
    domain={domain} 
    clientId={clientId} 
    redirectUri={window.location.origin}
    authorizationParams={{redirect_uri: window.location.origin}}
  >
    <BrowserRouter>   
        <App />
    </BrowserRouter>
  </Auth0Provider>,
  {/* // </React.StrictMode>, */}
);

