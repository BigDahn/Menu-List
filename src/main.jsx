import ReactDOM from 'react-dom/client'
import App from './Menu/App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    
      
        <App />
        <ToastContainer position="top-center" />
      
   
  </>
)
