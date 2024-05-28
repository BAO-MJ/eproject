import React, { CSSProperties, ReactNode } from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
import './TitleImage.css';

type ChildrenDirection = 'vertical' | 'horizontal';


export default function TitleImage({className = '', style, src = '', alt, childrenDirection = 'vertical', children = undefined}: Readonly<{className?: string, style?: CSSProperties, src?: string, alt: string, childrenDirection?: ChildrenDirection, children?: ReactNode}>)
{
    const imageDiv = (  <div className="image-container">
                            <Image fluid className={src == '' ? "image-placeholder" : ''} src={src} alt={alt}/>
                        </div>);
                        
    return (
        <Container className={["image-wrapper", className].join(' ')} style={style}>
            {childrenDirection === 'vertical' ? <Row>{imageDiv}</Row> : <Col>{imageDiv}</Col>}
            {childrenDirection === 'vertical' ? <Row>{children}</Row> : <Col>{children}</Col>}
        </Container>
    )
}