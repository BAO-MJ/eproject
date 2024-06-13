import React, { CSSProperties, ReactNode } from "react";
import { Button, Image, Stack } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import "./InfoImage.css";

function StackText({className = '', children, style})
{
    return (<span style={style} className={["text-start px-4 py-0", className].join(' ')}>{children}</span>);
}

export default function InfoImage({id = '', className = '', style, image, location, name, openHours, direction = 'vertical', showReviewModal})
{
    const imageDiv =    <div className="image-container">
                            <Image fluid className={image === '' ? "image-placeholder" : ''} src={image} alt={""}/>
                        </div>;

    /* https://stackoverflow.com/questions/42388989/bootstrap-centering-elements-vertically-and-horizontally */                   
    const stackTexts =  <Stack className="pb-2 my-auto flex-grow-1" gap={2}>
                            <StackText className="info-location" style={{color: '#DC502C', fontWeight: 'bold', fontSize: 'large'}}><FaLocationDot/>  <span>{location}</span></StackText>
                            <StackText className="info-title" style={{fontWeight: 'bold', fontSize: 'x-large'}}>{name}</StackText>
                            <StackText className="info-hours">{openHours}</StackText>
                            <Button onClick={() => { showReviewModal(name, image) }} variant="outline-info" className="mx-3">★ Review This ★</Button>
                        </Stack>;

    let classNames = `image-wrapper info-image ${direction === 'vertical' ? "flex-column" : "flex-row"}`;

    // if (direction === 'vertical') classNames += " flex-md-column";

    return (
        <div id={id} className={[classNames, className].join(' ')} style={style}>
            {imageDiv}
            {stackTexts}
        </div>
    );
}