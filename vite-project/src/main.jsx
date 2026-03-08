import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import App from './App.jsx'
import Greeting from './Greeting.jsx'
import User from './User.jsx'
import App1 from './App1.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />

  </StrictMode>,
)
