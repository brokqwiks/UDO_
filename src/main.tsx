import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/translationText/i18next.ts'
import App from './app/App.tsx'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
