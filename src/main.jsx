import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/Portfolio'>
    <RouterProvider router={router} />
  </BrowserRouter>
)
