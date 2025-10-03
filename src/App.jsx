import {  Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import NotFound from './pages/NotFound/NotFound'
import Footer from './components/Footer/Footer'
import { motion,AnimatePresence } from "framer-motion";
import AboutPage from './pages/AboutPage/AboutPage'
import ContactUsPage from './pages/ContactUsPage/ContactUsPage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
function App() {  

  return (
    <>

      <Navbar />
      
     <div className="AppContainer"> 

     <AnimatePresence mode="wait">
        <Routes>
          //HomePage
          <Route path="/" element={ 
            <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <HomePage />
          </motion.div>} />
          //AboutPage
          <Route path="/about-us" element={ 
            <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <AboutPage />
          </motion.div>} />
          //ServicesPage
          <Route path="/services" element={ 
            <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <ServicesPage />
          </motion.div>} />
          //ContactUsPage
          <Route path="/contact-us" element={ 
            <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <ContactUsPage />
          </motion.div>} />
          //NotFound Page
            <Route path="*" element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <NotFound />
              </motion.div>
            } />
        </Routes>
        </AnimatePresence>
    </div>
    <Footer/>
    </>

  )
}

export default App
