import React, { CSSProperties, ReactNode } from "react";
import { Button, Image, Stack } from "react-bootstrap";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import "./InfoImage.css";

function StackText({className = '', children, style})
{
    return (<span style={style} className={["text-start px-4 py-0", className].join(' ')}>{children}</span>);
}

export default function InfoImage({id = '', className = '', style, image, location, name, openHours, direction = 'vertical'})
{
    const imageDiv =    <div className="image-container flex-shrink-1">
                            <Image fluid className={image === '' ? "image-placeholder" : ''} src={image} alt={""}/>
                        </div>;

    /* https://stackoverflow.com/questions/42388989/bootstrap-centering-elements-vertically-and-horizontally */                   
    const stackTexts =  <Stack className="pb-2 my-auto flex-grow-1" gap={2}>
                            <StackText className="info-location" style={{color: '#DC502C', fontWeight: 'bold', fontSize: 'large'}}><FaLocationDot/>  <span>{location}</span></StackText>
                            <StackText className="info-title" style={{fontWeight: 'bold', fontSize: 'x-large'}}>{name}</StackText>
                            <StackText className="info-hours">{openHours}</StackText>
                            <div><Button variant="outline-info" className="ms-4" style={{backgroundColor:'#ffb300',color:'#fff'}}>Review This ★</Button></div>
                        </Stack>;

    let classNames = "image-wrapper info-image flex-row";

    if (direction === 'vertical') classNames += " flex-md-column";

    return (
        <div id={id} className={[classNames, className].join(' ')} style={style}>
            {imageDiv}
            {stackTexts}
        </div>
    );
}