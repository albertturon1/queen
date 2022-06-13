import './App.css';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';



function App() {
  const [contactVisible, setContactVisible] = useState(false);
  const openContactForm = () => setContactVisible(true);

  const closeContactForm = () => setContactVisible(false);

  useEffect(() => {
    if (contactVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [contactVisible]);

  return (
    <div className="relative">
      <Navbar setContactVisible={openContactForm} />
      <div className="pt-16" />
      <Routes>
        <Route exact path="/queen" element={<Home />} />
        <Route exact path="/queen/about" element={<About />} />
      </Routes>
      {contactVisible ? <ContactForm visible={contactVisible} setContactVisible={closeContactForm} /> : null}
      <Toaster />
    </div>
  );
}

export default App;
