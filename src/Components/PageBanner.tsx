import React, { ReactNode } from "react";
import { Container, Image } from "react-bootstrap";
import './PageBanner.css';

export default function PageBanner({children = '', image}: {children?: ReactNode, image: string})
{
    return (
        <div className="page-title">
            <Image fluid src={image} alt=""/>
            <div className="flex-grow-1">
                <Container className="mx-5">
                    {children}
                </Container>
            </div>
        </div>
    )
}