import { Outlet } from 'react-router-dom'
import ScrollToTop from "./Components/ScrollToTop";
import './App.css'
import { Navbar } from './Components/Navbar'

 export function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  )
}
