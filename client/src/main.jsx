import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductGolobal from './context/mainContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductGolobal>
    <App />
  </ProductGolobal>)
