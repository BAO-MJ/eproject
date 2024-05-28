import './Main.css';
import React from "react";
import Attractions from './Attractions/Attractions.tsx';
import Restaurants from './Restaurants/Restaurants.tsx';
import Events from './Events/Events.tsx';

export default function Main()
{
    return (
        <main>
            <div style={{width: '100%'}}>
                <section id='attractions' style={{backgroundColor: 'lightblue'}}>
                    <h1>Attractions & Rides!</h1>
                    <Attractions/>
                </section>
                <section id='events'>
                    <h1>Must-see Events</h1>
                    <Events/>
                </section>
                <section id='restaurants' style={{backgroundColor: 'lightblue'}}>
                    <h1>RESTAURANTS</h1>
                    <Restaurants/>
                </section>
            </div>
        </main>
    )
}