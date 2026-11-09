import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SketchPage from './skins/sketch/SketchPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SketchPage />
  </StrictMode>,
)
