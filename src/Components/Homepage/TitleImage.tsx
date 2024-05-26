import React, { CSSProperties, ReactNode } from "react";
import { Image } from "react-bootstrap";
import './TitleImage.css';

export default function TitleImage({className = '', style, src = '', alt, children = undefined}: Readonly<{className?: string, style?: CSSProperties, src?: string, alt: string, children?: ReactNode}>)
{
    return (
        <div className={"image-wrapper " + className} style={style}>
            <div className="image-container d-flex flex-grow-1">
                <Image fluid className={src == '' ? "image-placeholder" : ''} src={src} alt={alt}/>
            </div>
            {children}
        </div>
    )
}