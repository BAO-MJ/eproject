import React from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import InfoImage from "../Restaurants/InfoImage.tsx";
import './Events.css';
import './Events.scss';

const Events = () => {
    return (
    
        <Carousel slide indicators controls interval={null} className="px-5 pt-3 pb-5" >
            <CarouselItem>
                <Container className="container-xl-forced">
                    <Row>
                      
                        <Col >
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
            </CarouselItem>
        </Carousel>
       
    );
};

export default Events;
