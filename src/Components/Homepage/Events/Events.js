import React from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import InfoImage from "../Restaurants/InfoImage.js";
import './Events.css';
import { useMediaQuery } from "react-responsive";

const events = [
    {
        image: "christmas.jpg",
        location: "Keansburg Amusement Park",
        name: "Christmas in July",
        openHours: "Jul 25th 2024 12:00 PM"
    },
    {
        image: "images-3.jpg",
        location: "Keansburg Amusement Park",
        name: "The Snow Princess Meet",
        openHours: "Aug 6th 2024 12:00 PM"
    },
    {
        image: "roar.jpg",
        location: "Keansburg Amusement Park",
        name: "Dino Day",
        openHours: "Jun 25th 2024 01:00 PM"
    },
    {
        image: "images-2.jpg",
        location: "Keansburg Amusement Park",
        name: "Fireworks 3rd of July",
        openHours: "Jul 3rd 2024 08:00 PM"
    },
    {
        image: "images-1.jpg",
        location: "Keansburg Amusement Park",
        name: "National Ice Cream Day",
        openHours: "Jul 17th 2024 01:00 PM"
    },
    {
        image: "images-4.jpg",
        location: "Keansburg Amusement Park",
        name: "National French Fry Day",
        openHours: "Jul 12th 2024 12:00 PM"
    },
    
]

function CarouselItems() {


}

const Events = () => {
    const isMobile = useMediaQuery({ minWidth: 768, maxWidth: 991.98 });
    const isDesktop = useMediaQuery({ minWidth: 992 });

    let multiplier = 1;
    if (isMobile) multiplier = 2;
    else if (isDesktop) multiplier = 3;

    return (
        <Carousel slide indicators controls interval={null} className="px-5 pt-3 pb-5" >
            {(() => {
                
                let items = [];
                for (let i = 0; i < events.length / multiplier; i++) {
                    items.push(
                        <CarouselItem>
                            <Container className="container-xl-forced">
                                <Row>
                                    {events.slice(i * multiplier, (i + 1) * multiplier).map(ev =>
                                        <Col>
                                            <InfoImage image={ev.image} location={ev.location} name={ev.name} style={{color:'black'}} openHours={ev.openHours}/>
                                        </Col>
                                    )}
                                </Row>
                            </Container>
                        </CarouselItem>
                    );
                }
                return items;
            })()}
            {/* <CarouselItem>
                <Container className="container-xl-forced">
                    <Row>
                        <Col>
                            <InfoImage image="christmas.jpg" location="Keansburg Amusement Park" name="Christmas in July" style={{color:'black'}} openHours="Jul 25th 2024 12:00 PM"/>
                        </Col>
                        <Col>
                            <InfoImage image="images-3.jpg" location="Keansburg Amusement Park" name="The Snow Princess Meet"style={{color:'black'}} openHours="Aug 6th 2024 12:00 PM"/>
                        </Col>
                        <Col>
                            <InfoImage image="roar.jpg" location="Keansburg Amusement Park" name="Dino Day"style={{color:'black'}} openHours="Jun 25th 2024 01:00 PM"/>
                        </Col>
                    </Row>
                </Container>
            </CarouselItem>
            <CarouselItem>
                <Container className="container-xl-forced">
                    <Row>
                        <Col>
                            <InfoImage image="images-2.jpg" location="Keansburg Amusement Park " name="Fireworks 3rd of July"style={{color:'black'}} openHours="Jul 3rd 2024 08:00 PM"/>
                        </Col>
                        <Col>
                            <InfoImage image="images-1.jpg" location="Keansburg Amusement Park " name="National Ice Cream Day"style={{color:'black'}} openHours="Jul 17th 2024 01:00 PM"/>
                        </Col>
                        <Col>
                            <InfoImage image="images-4.jpg" location="Keansburg Amusement Park " name="National French Fry Day"style={{color:'black'}} openHours="Jul 12th 2024 12:00 PM"/>
                        </Col>
                    </Row>
                </Container>
            </CarouselItem> */}
            {/* <CarouselItems/> */}
        </Carousel>
       
    );
};

export default Events;
