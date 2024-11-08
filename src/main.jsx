import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Queto from './pages/getAqueto/Queto.jsx'
import Footer from './components/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <>
    <Navbar />
    <Queto />
    <Footer/>
    </>
    
  </StrictMode>,
)
