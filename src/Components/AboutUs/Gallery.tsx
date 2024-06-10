import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import './Gallery.css';

const images = [
    "https://keansburgamusementpark.com/wp-content/uploads/2020/02/Dragons-600x420.jpeg",
    "https://keansburgamusementpark.com/wp-content/uploads/2015/03/go-karts_header1-1024x570.jpg",
    "https://keansburgamusementpark.com/wp-content/uploads/2024/03/0topglo3-600x420.jpeg",
    "https://keansburgamusementpark.com/wp-content/uploads/2017/03/keansburg-beach-tom-simpson.jpg",
    "https://keansburgamusementpark.com/wp-content/uploads/2019/05/636650338533926872-5-ASB-0621-Keansburg-Batting-Cages.jpg",
    "https://keansburgamusementpark.com/wp-content/uploads/2015/03/arcade-7.jpg",
    // "https://keansburgamusementpark.com/wp-content/uploads/2015/04/fishing-pier_header-768x512.jpg"
]

export default function Gallery() {
    return (
        <div id="gallery">
            <Container>
                <Row>
                    <h2>Gallery</h2>
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