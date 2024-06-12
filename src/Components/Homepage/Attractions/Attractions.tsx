import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './Attractions.css';

function Portfolio({ image, title, description, ...props }: Readonly<{ image: string, title: string, description: string }>) {
    return (
        <Col {...props}>
            <div className="image-container">
                <Image fluid className={image === '' ? "image-placeholder" : ''} src={image} alt={"place of fun"}/>
                <div className="banner-darken"/>
            </div>
            <div className="portfolio-desc">
                <h2 style={{height: '50px'}}><b>{title}</b></h2>
                <span>{description}</span>
            </div>
        </Col>
    );
}

export default function Attractions() {
    return (
        <Container fluid={'xl'}>
            <Row className="gx-20 px-5 py-4">
                <Portfolio sm={'6'} lg={'4'} className={"portfolio"}
                    image="Dragons.jpg"
                    title='Rides'
                    description="Ready for an adventure-packed day? Head to Keansburg Amusement Park and experience the thrill of our gravity-defying rides! From classic favorites to pulse-pounding coasters, there's excitement around every corner." />
                <Portfolio sm={'6'} lg={'4'} className={"portfolio mt-4 mt-sm-0"}
                    image="go-karts.jpg"
                    title='Go Karts'
                    description="Speed, Thrills, and Laughs Await! Dive into the excitement at Fast Trax Go Karts at Keansburg Amusement Park! Whether you’re a kid or just a kid at heart, we’ve got the track for you."/>
                <Portfolio sm={'12'} lg={'4'} className={"portfolio mt-4 mt-lg-0"}
                    image="fishing-pier.jpg"
                    title='Fishing Pier'
                    description="Enjoy the Day Fishing on Our 2000 foot Pier Overlooking the Raritan Bay." />
            </Row>
        </Container>
    );
}