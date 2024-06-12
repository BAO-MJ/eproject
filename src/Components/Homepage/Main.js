import React from "react";
import Attractions from './Attractions/Attractions.js';
import Restaurants from './Restaurants/Restaurants.js';
import Events from './Events/Events.js';
import Title from './Title/Title.js';
import Newsletter from "./Newsletter/Newsletter.js";
import Review from "./Review/Review.js";
import './Main.css';

export default function Main() {
    return (
        <main style={{ width: '100%'}}>
            <section id='title'>
                <Title />
            </section>
            <section id='attractions'>
                <h1>Attractions & Rides!</h1>
                <Attractions />
            </section>
            <section id='events'>
                <h1>Must-see Events</h1>
                <Events />
            </section>
            <section id='restaurants'>
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