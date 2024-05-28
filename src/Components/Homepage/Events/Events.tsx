import React from "react";
import { Carousel, CarouselItem, Col, Container, Row, Stack } from "react-bootstrap";
import InfoImage from "../Restaurants/InfoImage.tsx";
import './Events.css';
import './Events.scss';

const Events = () => {
    return (
        <Carousel slide indicators controls interval={null} style={{backgroundColor: 'black'}} className="px-5 pt-3 pb-5">
            <CarouselItem>
                <Container className="container-xl-forced">
                    <Row>
                        <Col>
                            <InfoImage image="" location="A" name="V" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="" location="A" name="V" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="" location="A" name="V" openHours="C"/>
                        </Col>
                    </Row>
                </Container>
            </CarouselItem>
            <CarouselItem>
                <Container className="container-xl-forced">
                    <Row>
                        <Col>
                            <InfoImage image="" location="A" name="V" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="" location="A" name="V" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="" location="A" name="V" openHours="C"/>
                        </Col>
                    </Row>
                </Container>
            </CarouselItem>
            <CarouselItem>
                <Container className="container-xl-forced">
                    <Row>
                        <Col>
                            <InfoImage image="" location="A" name="V" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="" location="A" name="V" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="" location="A" name="V" openHours="C"/>
                        </Col>
                    </Row>
                </Container>
            </CarouselItem>
        </Carousel>
    );
};

export default Events;
