import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { ContactsContextProvider } from './context'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider domain={process.env.REACT_APP_AUTH0_DOMAIN} clientId={process.env.REACT_APP_AUTH0_CLIENT_ID} redirectUri={window.location.origin}>
    <ContactsContextProvider>
      <App />
    </ContactsContextProvider>
  </Auth0Provider>
)
