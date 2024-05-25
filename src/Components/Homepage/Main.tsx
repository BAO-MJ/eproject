import './Main.css';
import React from "react";
import Attractions from './Attractions.tsx';

export default function Main()
{
    return (
        <body>
            <div style={{width: '100%'}}>
                <section id='attractions'>
                    <Attractions/>
                </section>
                {/* <section id='entertainment'>
                    <Container fluid>
                        <p>Hello</p>
                    </Container>
                </section>
                <section id='restaurant' style={{backgroundColor: 'lightblue'}}>
                    <Container fluid>
                        <p>Hello</p>
                    </Container>
                </section>
                <section id='pricing'>
                    <Container fluid>
                        <p>Hello</p>
                    </Container>
                </section> */}
            </div>
        </body>
    )
}