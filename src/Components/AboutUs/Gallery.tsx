import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import './Gallery.css';

const images = [
    "Dragons.jpg",
    "go-karts.jpg",
    "images-21.jpg",
    "images-22.jpg",
    "images-23.jpg",
    "images-24.jpg",
    // "https://keansburgamusementpark.com/wp-content/uploads/2015/04/fishing-pier_header-768x512.jpg"
]

export default function Gallery() {
    return (
        <div id="gallery">
            <Container>
                <Row>
                    <h2 style={{color:'#0D3483',fontSize:'3.5rem',marginBottom:'30px'}}>Gallery</h2>
                </Row>
                <Row>
                    <Col sm={'6'}>
                        <Row className="pb-3">
                            <Col sm={'6'}>
                                <Image src={images[0]} />
                            </Col>
                            <Col sm={'6'}>
                                <Image src={images[1]} />
                            </Col>
                        </Row>
                        <Row>
                            <Image src={images[2]} />
                        </Row>
                    </Col>
                    <Col sm={'6'}>
                        <Row className="pb-3">
                            <Image src={images[3]} />
                        </Row>
                        <Row>
                            <Col sm={'6'}>
                                <Image src={images[4]} />
                            </Col>
                            <Col sm={'6'}>
                                <Image src={images[5]} />
                            </Col>
                        </Row>
                    </Col>
                    {/* <Carousel indicators={false}>
                        {images.map(image => (
                            <CarouselItem>
                                <Image src={image} fluid height={600}/>
                            </CarouselItem>
                        ))}
                    </Carousel> */}
                </Row>
            </Container>
        </div>
    )
}