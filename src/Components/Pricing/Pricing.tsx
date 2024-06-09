import React, { useMemo } from "react";
import './Pricing.css';
import { Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { PiCheck } from "react-icons/pi";
import { IconContext } from "react-icons";

const Pricing = () => {
  const iconStyles = [useMemo(() => ({ style: { color: '#6CC1F7' } }), []), useMemo(() => ({ style: { color: '#ffb300' } }), []), useMemo(() => ({ style: { color: '#8AF4CF' } }), [])];
  return (
    <div className='pagebanner' id="pricing">
      <div style={{position: 'relative'}}>
        <div className="banner-darken" />
        <Image fluid src={"https://keansburgamusementpark.com/wp-content/uploads/2024/03/Untitled-7-copy-2.png"} alt=""/>
      
        <Container id="park-title" className="mx-5">
          <Row>
            <h2>Pricing</h2>
          </Row>
        </Container>
      </div>
      <div className='inner' />

      <main id='page-wrapper'>

        <div className='content'></div>
        <article className='cr7'>

          <h1 className='post_title-1'>Our Pricing</h1>

          <Container style={{ minHeight: '992px' }}>
            <Row>

              <Col md={'4'}>
                <IconContext.Provider value={iconStyles[0]}>
                  <div className="shadow-2 p-4 surface-0 border-blue-500 border-2 h-100" style={{ borderRadius: '6px' }}>
                    <span className="text-2xl font-bold text-900">Rides</span>
                    <hr className="my-3 border-top-1 border-none surface-border" />
                    <div>
                      <ListGroup variant="flush">
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Individual $1.35*</span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Sheet of 50 Tickets $49.95* </span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Book of 100 Tickets $89.95*</span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Book of 200 Tickets $159.95*</span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Combo Packages: 100+ Guests at $29/person</span></ListGroupItem>
                      </ListGroup>
                    </div>
                  </div>
                </IconContext.Provider>
              </Col>
              <Col md={'4'}>
                <IconContext.Provider value={iconStyles[1]}>
                  <div className="shadow-2 p-4 surface-0 border-blue-500-1 border-2 h-100" style={{ borderRadius: '6px' }}>
                    <span className="text-2xl font-bold text-900">Go Karts</span>
                    <hr className="my-3 border-top-2 border-none surface-border-1" />
                    <div>
                      <ListGroup variant="flush">
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Adult Track: Cash $8.50</span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Double Seater: Cash $10.50</span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Kiddie Track: Cash $5.00</span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Book of 4 Adult Rides: Cash $32.00</span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Book of 8 Adult Rides: Cash $59.00</span></ListGroupItem>
                      </ListGroup>
                    </div>
                  </div>
                </IconContext.Provider>
              </Col>
              <Col md={'4'}>
                <IconContext.Provider value={iconStyles[2]}>
                  <div className="shadow-2 p-4 surface-0 border-blue-500-2 border-2 h-100" style={{ borderRadius: '6px' }}>
                    <span className="text-2xl font-bold text-900">Fishing</span>
                    <hr className="my-3 border-top-3 border-none surface-border-2" />
                    <div>
                      <ListGroup variant="flush">
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">$12.00 Per Person 2 pole Limit</span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">$6.00 Per Child under 48″</span></ListGroupItem>
                        {/* <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Dry Spectators: Cash $15</span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Toddler Rate (Up to 42" tall): Cash $19</span></ListGroupItem>
                        <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Lockers: Cash $20 ($10 refund upon key return)</span></ListGroupItem> */}
                      </ListGroup>
                    </div>
                  </div>
                </IconContext.Provider>
              </Col>
            </Row>
          </Container>
        </article>
      </main>
    </div>
  );
};

export default Pricing;
