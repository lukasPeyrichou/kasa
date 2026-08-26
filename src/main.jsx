import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Seuls les sous-ensembles latins sont charges : le site est en francais,
// les subsets cyrillique / grec / vietnamien seraient du poids mort.
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
