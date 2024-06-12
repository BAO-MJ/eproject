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
                            <InfoImage image="christmas.jpg" location="Christmas in July" name="Jul 25th 2024 12:00 PM" openHours="c"/>
                      
                        </Col>
                        <Col>
                            <InfoImage image="images-3.jpg" location="The Snow Princess Meet" name="Aug 6th 2024 12:00 PM" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="roar.jpg" location="Dino Day" name="Jun 25th 2024 01:00 PM" openHours="C"/>
                        </Col>
                    </Row>
                </Container>
            </CarouselItem>
            <CarouselItem>
                <Container className="container-xl-forced">
                    <Row>
                        <Col>
                            <InfoImage image="images-2.jpg" location="Fireworks 3rd of July" name="Jul 3rd 2024 08:00 PM" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="images-1.jpg" location="National Ice Cream Day" name="Jul 17th 2024 01:00 PM" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="images-4.jpg" location="National French Fry Day" name="Jul 12th 2024 12:00 PM" openHours="C"/>
                        </Col>
                    </Row>
                </Container>
            </CarouselItem>
        </Carousel>
       
    );
};

export default Events;
