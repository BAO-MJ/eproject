import React from 'react'
import Header from './Components/Header.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/Main.tsx';
import Footer from './Components/Footer.tsx';
// https://keansburgamusementpark.com/
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
