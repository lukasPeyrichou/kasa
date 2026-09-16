import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/montserrat/latin-500.css'
import '@fontsource/montserrat/latin-700.css'
import '@fontsource/montserrat/latin-ext-500.css'
import '@fontsource/montserrat/latin-ext-700.css'
import './styles/main.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
