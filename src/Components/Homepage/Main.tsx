import './Main.css';
import React from "react";
import Attractions from './Attractions/Attractions.tsx';
import Entertainment from './Entertainment.tsx';
import Restaurants from './Restaurants/Restaurants.tsx';

export default function Main()
{
    return (
        <main>
            <div style={{width: '100%'}}>
                <section id='attractions' style={{backgroundColor: 'lightblue'}}>
                    <Attractions/>
                </section>
                <section id='entertainment'>
                    <Entertainment/>
                </section>
                <section id='restaurants' style={{backgroundColor: 'lightblue'}}>
                    <Restaurants/>
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
        </main>
    )
}