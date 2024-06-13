import './index.css'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(<AppRoutes />)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})