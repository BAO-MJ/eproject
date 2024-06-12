import React, { useMemo } from "react";
import './Pricing.css';
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { PiCheck } from "react-icons/pi";
import { IconContext } from "react-icons";
import PageBanner from "../PageBanner.tsx";

const Pricing = () => {
    const iconStyles = useMemo(() => [{ style: { color: '#6CC1F7' } }, { style: { color: '#ffb300' } }, { style: { color: '#8AF4CF' } }], []);
    return (
        <div className='pagebanner' id="pricing">
            <PageBanner image={"images-12.png"}>
                <Row>
                    <h1><b style={{color:'#FFEDC8'}}>Pricing</b></h1>
                </Row>
            </PageBanner>
            <div className='inner' />
            <main id='page-wrapper'>
                <div className='content'></div>
                <article className='cr7'>
                    <h1 className='post_title-1'>Our Pricing</h1>
                    <Container style={{ minHeight: '992px' }}>
                        <Row>
                            <Col md={'4'}>
                                <IconContext.Provider value={iconStyles[0]}>
                                    <div className="shadow-2 p-4 surface-0 border-blue-500 border-2 h-100" style={{ borderRadius: '6px',color:'black' }}>
                                        <span className="text-2xl font-bold text-900" >Rides</span>
                                        <hr className="my-3 border-top-1 border-none surface-border" />
                                        <div>
                                            <ListGroup variant="flush">
                                                <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Individual $1.35</span></ListGroupItem>
                                                <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Sheet of 50 Tickets $49.95</span></ListGroupItem>
                                                <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Book of 100 Tickets $89.95</span></ListGroupItem>
                                                <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Book of 200 Tickets $159.95</span></ListGroupItem>
                                            </ListGroup>
                                        </div>
                                    </div>
                                </IconContext.Provider>
                            </Col>
                            <Col md={'4'}>
                                <IconContext.Provider value={iconStyles[1]}>
                                    <div className="shadow-2 p-4 surface-0 border-blue-500-1 border-2 h-100" style={{ borderRadius: '6px',color:'black' }}>
                                        <span className="text-2xl font-bold text-900">Go Karts</span>
                                        <hr className="my-3 border-top-2 border-none surface-border-1" />
                                        <div>
                                            <ListGroup variant="flush">
                                                <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">Adult Track: Cash $8.50</span></ListGroupItem>
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
                                    <div className="shadow-2 p-4 surface-0 border-blue-500-2 border-2 h-100" style={{ borderRadius: '6px',color:'black' }}>
                                        <span className="text-2xl font-bold text-900">Fishing</span>
                                        <hr className="my-3 border-top-3 border-none surface-border-2" />
                                        <div>
                                            <ListGroup variant="flush">
                                                <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">$12.00 Per Person 2 pole Limit</span></ListGroupItem>
                                                <ListGroupItem as='li'><PiCheck /><span className="text-600 ms-2">$6.00 Per Child under 48″</span></ListGroupItem>
                                            </ListGroup>
                                        </div>
                                    </div>
                                </IconContext.Provider>
                            </Col>
                        </Row>
                        <div className="note"><h4>Note:</h4>
                        <ul>
                            <li>Guests under 100 cm receive free admission to VinWonders Phu Quoc</li>
                            <li>VinWonders Phu Quoc ticket prices include VAT</li>
                            <li>Elderly people: Customers who are 60 years old or older and bring photo identification documents for comparison</li>
                            <li>Khách hàng có thể được giảm thêm tới 5% giá vé VinWonders Phú Quốc khi đăng ký là thành viên và đặt vé online</li>
                        </ul>
                        </div>
                        <div className="rules"><h3 style={{color:'red'}}>Rules Of Keansburg Amusement Park</h3></div>                 
		<div className="wpb_wrapper" style={{background:'#f8f8f8'}}>
			
<p><span style={{color:'#552f7d'}}><strong>WHAT ARE THE PHYSICAL, HEIGHT AND SAFETY REQUIREMENTS?</strong></span></p>
<p>Rider requirements are set by the state of New Jersey.&nbsp; All requirements are subject to change.&nbsp; Each attraction is inspected and subject to the laws in New Jersey.&nbsp; All state law requirements, such as height and weight restrictions, are posted at each ride and are strictly enforced.&nbsp; Any guest who violates any written safety regulation or engages in behavior that poses a safety issue to either themselves or our guests may result in criminal prosecution under N.J.S.A 5:3-36.1.&nbsp; Any violator of park safety regulations may be subject to fines up to $1,000 and up to 6 months in prison. &nbsp;Children should be self supporting when riding rides.</p>
<p><span style={{color:'#552f7d'}}><strong>CAN YOU RIDE&nbsp;WITH A CAST, OR A BRACE, OR WHILE PREGNANT?</strong></span></p>
<p>For your safety, riders with hard or soft casts or splints of any kind, any type of brace, recent surgery, back injuries or who are pregnant are NOT permitted on rides at Keansburg Amusement Park.</p>
<p><span style={{color:'#552f7d'}}><strong>OPERATIONS &amp; ATTRACTIONS</strong></span></p>
<p>At times, for the safety of our guests, rides, and attractions will be closed for maintenance.&nbsp; Refunds will not be given when attractions are closed for maintenance. Wristbands can not be shared, traded, or exchanged. Wristbands are only valid on day of purchase. Ride rules vary. Please check signs on entrances.</p>
<p><span style={{color:'#552f7d'}}><strong>RIDE RESTRAINT SYSTEMS</strong></span></p>
<p>All guests are required to use all ride restraint systems properly at all times. Guests who are large framed, very tall or too small may not be allowed to ride certain rides due to safety regulations.&nbsp; Any guest who tampers with a safety restraint system will be subject to prosecution under New Jersey State Law.&nbsp; Any violator may be subject&nbsp;to fines up to $1000 and up to 6 months in jail.</p>
<p><span style={{color:'#552f7d'}}><strong>LOOSE ARTICLES</strong></span></p>
<p>Loose articles including cell phones, wallets, purses, keys, etc. may not be taken on thrill and select family rides.&nbsp; Please leave all personal items while you are riding with a companion.&nbsp; Employees are not allowed to watch over personal articles of guests.</p>
<p><span style={{color:'#552f7d'}}><strong>WHAT IS THE DRESS CODE?</strong></span></p>
<p>Keansburg Amusement Park is a family-friendly amusement park. And as such, any clothing with profanity, illegal substances or suggestive/offensive material is prohibited.&nbsp; For your safety, shoes should be worn during your visit to the park at all times.&nbsp; Certain attractions, such as our Go Karts, require closed toe shoes.&nbsp; All guests must be wearing a shirt while riding the attraction.&nbsp; Guests may not wear swimwear out of courtesy to our other guests.</p>
<p><span style={{color:'#552f7d'}}><strong>APPROPRIATE BEHAVIOR</strong></span></p>
<p>Keansburg Amusement Park is a family friendly amusement park and privately owned.&nbsp; We reserve the right to remove any guest who prevents other guests from enjoying the park.&nbsp; Any guest who is removed from the park will not be issued a refund.</p>
<p><span style={{color:'#552f7d'}}><strong>ALCOHOLIC BEVERAGES</strong></span></p>
<p>Outside alcoholic beverages are not permitted at Keansburg Amusement Park.&nbsp; Guests may visit our three establishments, The Olde Heidelberg, The Pavilion, and The Miami Club to enjoy alcoholic beverages.&nbsp; Any beverage purchased at these establishments may not be taken outside the confines of such establishment.</p>
<p><span style={{color:'#552f7d'}}><strong>CAN YOU GRILL AT THE PARK?</strong></span></p>
<p>Grilling is prohibited at Keansburg Amusement Park</p>
<p><span style={{color:'#552f7d'}}><strong>WHAT IS THE WEATHER POLICY?</strong></span></p>
<p>When there is inclement weather, rides may be temporarily suspended.&nbsp; Rides will reopen when it is deemed to safely resume operations.</p>
<p><span style={{color:'#552f7d'}}><strong>ARE PETS, SKATEBOARDS &amp; BIKES ALLOWED?</strong></span></p>
<p>For the safety of our guests, pets, skateboards, and bikes are not permitted at Keansburg Amusement Park.</p>
<p><span style={{color:'#552f7d'}}><strong>WHAT KIND OF FOOD DOES THE PARK OFFER?</strong></span></p>
<p>There are several Jersey boardwalk style food establishments at Keansburg Amusement Park at very affordable prices including ice cream, hot dogs, pizza and more.</p>
<p><span style={{color:'#552f7d'}}><strong>WHERE IS THE MOST CONVENIENT PLACE TO PARK?</strong></span></p>
<p>It is more convenient for our Guests to park in the lot behind the amusement park. Guests can enter the parking lot by driving under the Keansburg archway and proceed to the parking attendent.&nbsp; The cost to park ALL DAY LONG is $7 Monday through Friday and $10 on weekends and holidays.&nbsp; All guests who park in this lot will receive a coupon sheet full of savings available at Keansburg Amusement Park. &nbsp;Coupon Sheets are only available for customers who park in the Keansburg Amusement Park lot which is located under the Keansburg archway next to the batting cages. &nbsp;One coupon sheet per car.</p>
<p>Metered parking is limited and available on the street and in the lot next to the Go-Kart tracks.&nbsp; The Borough of Keansburg owns and operates the meters and strictly enforces any time infractions.&nbsp; Please note that parking tickets will be given to any expired meters, which are owned and operated by the Borough of Keansburg.</p>
<p><span style={{color:'#552f7d'}}><strong>WHAT COUPONS DOES THE PARK ACCEPT</strong></span></p>
<p>Keansburg Amusement Park only accepts coupons that come directly from the park.</p>

		</div>
	

                    </Container>
                </article>
            </main>
        </div>
    );
};

export default Pricing;
