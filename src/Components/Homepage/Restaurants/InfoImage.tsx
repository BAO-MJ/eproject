import React, { CSSProperties, ReactNode } from "react";
import TitleImage from "../TitleImage.tsx";
import "./InfoImage.css";
import { Stack } from "react-bootstrap";
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

function StackText({children, style}: {children: ReactNode, style?: CSSProperties})
{
    return (<span style={style} className="text-start px-5 py-1">{children}</span>);
}

export default function InfoImage({className = '', style, image, location, name, openHours, direction = 'vertical'}: Readonly<Props>)
{
    return (
        <TitleImage className={className + (direction === 'horizontal' ? ' flex-row' : ' flex-column')} style={style} src={image} alt="oh hello">
            <Stack className="justify-content-between">
                <StackText style={{color: '#DC502C', fontWeight: 'bold'}}><FaLocationDot/>  <span>{location}</span></StackText>
                <StackText style={{fontWeight: 'bold', fontSize: 'large'}}>{name}</StackText>
                <StackText>{openHours}</StackText>
            </Stack>
        </TitleImage>
    )
}