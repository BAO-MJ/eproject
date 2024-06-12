import React from "react";
import './About.css';
import History from "./History.tsx";
import ParkMap from "./ParkMap.tsx";
import { Row } from "react-bootstrap";
import Gallery from "./Gallery.tsx";
import PageBanner from "../PageBanner.tsx";

const About = () => {
    return (
        <div id="loki" style={{ backgroundColor: "white" }}>
            <PageBanner image={"hulk.png"}>
                <Row>
                    <h1><b style={{color:'#FFEDC8'}}>About us</b></h1>
                </Row>
                <Row>
                    <span style={{color:'#FFEDC8'}}>
                        Since 1904, our family mission remains rooted in
                        delivering a magical blend of tradition, excitement, and
                        safety, making Keansburg Amusement Park the heartbeat of
                        family enjoyment for over a century. With its classic
                        seaside charm and an array of attractions, Keansburg
                        Amusement Park continues to capture the hearts of guests
                        from near and far. Visitors can relive the magic of
                        traditional boardwalk amusements while enjoying modern
                        rides and entertainment. Welcome!
                    </span>
                </Row>
            </PageBanner>
            <section id="history">
                <History />
            </section>
            <section id="gallery">
                <Gallery />
            </section>
            <section id="park-map">
                <ParkMap />
            </section>
        </div>
    );
};

export default About;
