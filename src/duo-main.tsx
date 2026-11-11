import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SketchDuoPage from './skins/sketch/SketchDuoPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SketchDuoPage />
  </StrictMode>,
)
