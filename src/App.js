import React, { useState } from 'react';
import Header from './Components/Header.tsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './Components/Homepage/Main.tsx';
import Footer from './Components/Footer.tsx';
import Ticker from './Components/Ticker.tsx';
import About from './Components/AboutUs/About.js';
import Contact from './Components/ContactUs/Contact.tsx';
import BuyTicketModal from './Components/BuyTicketModal.tsx';
import Buytickets from './Components/Checkout/Checkout.tsx';
import Pricing from './Components/Pricing/Pricing.tsx';
import './App.scss';
import './App.css';
import './bootstrap-side-modals.css';
import { ScrollToTop } from './Components/ScrollToTop.tsx';
import ProcessCheckout from './Components/Checkout/ProcessCheckout.tsx';
import SignIn from './Components/Signing/SignIn.tsx';
import SignUp from './Components/Signing/SignUp.tsx';
// palette:
// https://colorhunt.co/palette/3db2ffffeddaffb830ff2442
// https://colorhunt.co/palette/008dda41c9e2ace2e1f7eedd
// https://colorhunt.co/palette/f7f7f7fcd59b1fa8cf2657c1
// ref:
// https://keansburgamusementpark.com/
// https://www.motocms.com/website-templates/demo/66540.html
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
                    <Route path='/forms/checkout' element={<Buytickets/>}/>
                    <Route path='/forms/checkout/process' element={<ProcessCheckout/>}/>
                </Routes>
                <Ticker />
                <Footer />
            </Router>
        </div>
    )
}

export default App
