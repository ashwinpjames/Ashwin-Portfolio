import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/globals.css'
import './styles/home.css'
import './styles/home-overrides.css'
import './styles/home-cta-overrides.css'
import './styles/header-refinement.css'
import './styles/insights.css'
import './styles/mobile-overrides.css'
import './styles/mobile-ux-refinement.css'
import './styles/brand-accent.css'
import './styles/typography-system.css'

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
