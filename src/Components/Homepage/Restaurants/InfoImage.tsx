import React, { CSSProperties, ReactNode } from "react";
import TitleImage from "./TitleImage.tsx";
import './TitleImage.css';
import "./InfoImage.css";
import './InfoImage.scss';
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";

type InfoDirection = 'vertical' | 'horizontal';

interface Props {
    className?: string,
    style?: CSSProperties,
    image: string,
    location: string,
    name: string,
    openHours: string,
    direction?: InfoDirection
}

function StackText({children, style}: Readonly<{children: ReactNode, style?: CSSProperties}>)
{
    return (<span style={style} className="text-start px-4 py-0">{children}</span>);
}

export default function InfoImage({className = '', style, image, location, name, openHours, direction = 'vertical'}: Readonly<Props>)
{
    const imageDiv =    <div className="image-container flex-shrink-1">
                            <Image fluid className={image == '' ? "image-placeholder" : ''} src={image} alt={""}/>
                        </div>;

    /* https://stackoverflow.com/questions/42388989/bootstrap-centering-elements-vertically-and-horizontally */                   
    const stackTexts =  <Stack className="pb-2 my-auto flex-grow-1" gap={2}>
                            <StackText style={{color: '#DC502C', fontWeight: 'bold', fontSize: 'large'}}><FaLocationDot/>  <span>{location}</span></StackText>
                            <StackText style={{fontWeight: 'bold', fontSize: 'x-large'}}>{name}</StackText>
                            <StackText>{openHours}</StackText>
                            <div><Button variant="outline-info" className="ms-4">Hello</Button></div>
                        </Stack>;
    if (direction === 'vertical')
    {
        return (
            <div className={["image-wrapper info-image flex-row flex-md-column", className].join(' ')} style={style}>
                {imageDiv}
                {/* <div></div> */}
                {stackTexts}
            </div>
            // <Container className={["image-wrapper info-image flex-row flex-md-column", className].join(' ')} style={style}>
            //     <Row>{imageDiv}</Row>
            //     <Row>{stackTexts}</Row>
            // </Container>
        )
    }
    else {
        return (
            // <Container className={["image-wrapper px-0 info-image flex-row", className].join(' ')} style={style}>
            //     <Col className="">{imageDiv}</Col>
            //     <Col>{stackTexts}</Col>
            // </Container>
            <div className={["image-wrapper info-image flex-row", className].join(' ')} style={style}>
                {imageDiv}
                {/* <div></div> */}
                {stackTexts}
            </div>
        );
    }
}