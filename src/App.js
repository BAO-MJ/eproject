import React from 'react';
import Header from './Components/Header.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/Homepage/Main.tsx';
import Footer from './Components/Footer.tsx';
// https://keansburgamusementpark.com/
import Events from './Components/Events.tsx'
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Main/>
        <Events/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
