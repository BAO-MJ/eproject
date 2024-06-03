import React from 'react'
import { Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
       <section id="attractions" style={{ backgroundColor: "while" }}>
        <Container
          className="justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h3>REASONS TO VISIT KEANSBURG AMUSEMENT PARKk</h3>
        </Container>
        <div className="content-boxes">
          <div className="content-box">
            <img src="https://keansburgamusementpark.com/wp-content/uploads/2024/03/rollercoaster.png"></img>
            <div className="reason">
              <h4 data-cursor="-color-green">Keansburg Amusement Park</h4>
            </div>
          </div>
          <div className="content-box">
            <img src="https://keansburgamusementpark.com/wp-content/uploads/2024/03/water-park.png"></img>
            <div className="reason">
              <h4 data-cursor="-color-green"> Family Water Park</h4>
            </div>
          </div>
          <div className="content-box">
            <img src="https://keansburgamusementpark.com/wp-content/uploads/2024/03/giant-slide.png"></img>
            <div className="reason">
              <h4 data-cursor="-color-green">Buy Tickets</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
