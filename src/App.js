import React, { useState } from 'react';
import Header from './Components/Header.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './Components/Homepage/Main.js';
import Footer from './Components/Footer.js';
import Ticker from './Components/Ticker.js';
import About from './Components/AboutUs/About.js';
import Contact from './Components/ContactUs/Contact.js';
import BuyTicketModal from './Components/BuyTicketModal.js';
import Checkout from './Components/Checkout/Checkout.js';
import Pricing from './Components/Pricing/Pricing.js';
import './App.css';
import './bootstrap-side-modals.css';
import ScrollToTop from './Components/ScrollToTop.js';
import ProcessCheckout from './Components/Checkout/ProcessCheckout.js';
import SignIn from './Components/Signing/SignIn.js';
import SignUp from './Components/Signing/SignUp.js';

const App = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Router>
                <ScrollToTop/>
                <Header setModalShow={setModalShow}/>
                {modalShow && <BuyTicketModal show={modalShow} setShow={setModalShow}/>}
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/about" element={<About />} />
                    <Route path='/forms/sign/in' element={<SignIn/>}/>
                    <Route path='/forms/sign/up' element={<SignUp/>}/>
                    <Route path="/forms/contact" element={<Contact />} />
                    <Route path='/forms/checkout' element={<Checkout setModalShow={setModalShow}/>}/>
                    <Route path='/forms/checkout/process' element={<ProcessCheckout/>}/>
                </Routes>
                <Ticker />
                <Footer />
            </Router>
        </div>
    )
}

export default App
