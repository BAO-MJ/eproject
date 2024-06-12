import React from "react";
import Attractions from './Attractions/Attractions.tsx';
import Restaurants from './Restaurants/Restaurants.tsx';
import Events from './Events/Events.tsx';
import Title from './Title/Title.tsx';
import './Main.css';
import Newsletter from "./Newsletter/Newsletter.tsx";
import Review from "./Review/Review.tsx";

export default function Main() {
    return (
        <main style={{ width: '100%'}}>
            <section id='title'>
                <Title />
            </section>
            <section id='attractions' style={{ backgroundColor: '' }}>
                <h1>Attractions & Rides!</h1>
                <Attractions />
            </section>
            <section id='events'>
                <h1>Must-see Events</h1>
                <Events />
            </section>
            <section id='restaurants' style={{ backgroundColor: '' }}>
                <h1>RESTAURANTS</h1>
                <Restaurants />
            </section>
            <section id="newsletter">
                <Newsletter/>
            </section>
            <section id="review">
                <Review/>
            </section>
        </main>
    )
}