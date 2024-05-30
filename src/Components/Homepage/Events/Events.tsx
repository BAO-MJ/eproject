import React from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import InfoImage from "../Restaurants/InfoImage.tsx";
import './Events.css';
import './Events.scss';

const Events = () => {
    return (
        <Carousel slide indicators controls interval={null} className="px-5 pt-3 pb-5">
            <CarouselItem>
                <Container className="container-xl-forced">
                    <Row>
                        <Col>
                            <InfoImage image="https://keansburgamusementpark.com/wp-content/uploads/2020/02/lazyriver-600x420.jpeg" location="A" name="V" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="https://keansburgamusementpark.com/wp-content/uploads/2019/01/1709825226136-600x420.jpeg" location="A" name="V" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="https://keansburgamusementpark.com/wp-content/uploads/2019/01/302287328_5383278715069703_7024645733887793081_n-600x420.jpg" location="A" name="V" openHours="C"/>
                        </Col>
                    </Row>
                </Container>
            </CarouselItem>
            <CarouselItem>
                <Container className="container-xl-forced">
                    <Row>
                        <Col>
                            <InfoImage image="https://keansburgamusementpark.com/wp-content/uploads/2015/03/IMG_4401-600x420.jpg" location="A" name="V" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="https://keansburgamusementpark.com/wp-content/uploads/2024/02/1FBA798A-04BD-4649-945D-ED3FD76E672C-600x420.jpg" location="A" name="V" openHours="C"/>
                        </Col>
                        <Col>
                            <InfoImage image="https://keansburgamusementpark.com/wp-content/uploads/2024/02/C66FBB66-8E21-48B5-94E1-17BAA48FE5D9_Original-600x420.jpg" location="A" name="V" openHours="C"/>
                        </Col>
                    </Row>
                </Container>
            </CarouselItem>
        </Carousel>
    );
};

export default Events;
