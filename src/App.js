import React from 'react'
import Header from './Components/Header.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
// https://keansburgamusementpark.com/
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
      </Router>
    </div>
  )
}

export default App
