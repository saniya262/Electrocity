
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'


function App() {
 
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
