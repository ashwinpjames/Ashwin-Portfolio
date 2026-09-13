import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
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

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
