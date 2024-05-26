import React from 'react';
import Header from './Components/Header.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/Homepage/Main.tsx';
import Footer from './Components/Footer.tsx';
// https://keansburgamusementpark.com/
// https://www.motocms.com/website-templates/demo/66540.html
const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
