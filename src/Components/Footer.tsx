import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="footer" role="contentinfo">
        <div className="inner">
          <div className="footer-inner">
            <div className="footer-header">
              <h2>Stay Connected</h2>
            </div>
            <div className="footer-socials">
              <div className="social-icon facebook">
                <a href="https://www.facebook.com/KeansburgAmusementRunawayRapids/"></a>
              </div>
              <div className="social-icon tiktok">
                <a href="https://www.tiktok.com/@keansburgamusementpark"></a>
              </div>
              <div className="social-icon instagram">
                <a href="https://www.instagram.com/keansburg_amusementpark/"></a>
              </div>
              <div className="social-icon youtube">
                <a href="https://www.youtube.com/@keansburgamusementparkruna6333"></a>
              </div>
            </div>
            <div className="footer-widgets">
              <div className="widget-column">
                <div id="block-6" className="widget widget_block">
                  <h3>Find us at</h3>
                  <p>
                    275 Beachway
                    <br></br>
                    Keansburg, NJ 07734
                    <br></br>
                    Phone: (732) 495-1400
                    <br></br>
                    Fax: (732) 495-1402
                  </p>
                </div>
              </div>
              <div className="widget-column">
                <div id="block-3" className="widget widget_block">
                  <h3>Get in Touch</h3>
                  <p>
                    Phone: (732) 495-1400
                    <br></br>
                    Fax: (732) 495-1402
                    <br></br>
                    Info@KeansburgAmusementPark.com
                  </p>
                </div>
              </div>
              <div className="widget-column">
                <div id="block-4" className="widget widget_block">
                  <h3>Park Hours</h3>
                  <p>
                    Depending on the day
                    <br></br>
                    and the weather, park hours vary.
                  </p>
                </div>
              </div>
              <div className="widget-column">
                <div id="block-5" className="widget widget_block">
                  <h3>
                    <a href="http://localhost:3000/">Media & Press</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="partner-disclaimer">
            Proud partner of Coca Cola
            <img
              src="https://keansburgamusementpark.com/wp-content/themes/barebones/assets/images/coca-cola.png"
              alt="Coca-Cola brand"
            ></img>
          </div>
          <div className="footer-copyright">
            ©2024 Keansburg Amusement Park | Privacy Policy | Cart
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
