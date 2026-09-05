import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/globals.css'
import './styles/home.css'
import './styles/home-overrides.css'
import './styles/home-cta-overrides.css'
import './styles/header-refinement.css'
import './styles/about.css'
import './styles/about-editorial.css'
import './styles/portrait-card.css'
import './styles/portrait-mobile-fix.css'
import './styles/resume.css'
import './styles/services.css'
import './styles/service-detail.css'
import './styles/case-studies.css'
import './styles/crm-case.css'
import './styles/resources.css'
import './styles/blog.css'
import './styles/contact.css'
import './styles/contact-method-colors.css'
import './styles/calendly.css'
import './styles/insights.css'
import './styles/utm-builder.css'
import './styles/meta-checklist.css'
import './styles/lead-quality.css'
import './styles/mobile-overrides.css'
import './styles/mobile-ux-refinement.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
