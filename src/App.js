import React from 'react';
import Header from './Components/Header.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/Homepage/Main.tsx';
import NewFooter from './Components/NewFooter.tsx';
import Ticker from './Components/Ticker.tsx';
import './App.scss';
import './App.css';
// palette:
// https://colorhunt.co/palette/3db2ffffeddaffb830ff2442
// https://colorhunt.co/palette/008dda41c9e2ace2e1f7eedd
// https://colorhunt.co/palette/f7f7f7fcd59b1fa8cf2657c1
// ref:
// https://keansburgamusementpark.com/
// https://www.motocms.com/website-templates/demo/66540.html
const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Main />
                <Ticker />
                <NewFooter />
                {/* <Footer /> */}
            </Router>
        </div>
    )
}

export default App
