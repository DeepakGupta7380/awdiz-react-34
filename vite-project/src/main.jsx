import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Greeting from './Greeting.jsx'
// import User from './User.jsx'
// import App1 from './App1.jsx'
// import Counter from './Counter.jsx'
// import CounterApp from './CounterApp.jsx'
// import Users from './Users.jsx'
// import Msg from './Msg.jsx'
// import App from './App.jsx'

// import Assignment from './Assignment.jsx'
// import Simplelogin from './Simplelogin.jsx'
 import App from './App.jsx'
import App3 from './App3.jsx'
// import ProductCard from './ProductCard.jsx'
import { BrowserRouter } from 'react-router-dom'
import Simple from './Simple.jsx'
import Intro from './Intro.jsx'
import Recon from './Recon.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>

  </StrictMode>,
)
