import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import './Ticker.css';
import { useGeolocated } from "react-geolocated";
import formatcoords from "formatcoords";

export default function Ticker()
{
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return function cleanUp() {
            clearInterval(timer);
        }
    });

    return (
        <Marquee className="ticker">
            It is now&nbsp;
            {time.toLocaleDateString("vi-VN")}&nbsp;
            {time.toLocaleTimeString()}&nbsp;
            {isGeolocationAvailable && isGeolocationEnabled && <span>at {formatcoords(coords?.latitude ?? 0, coords?.longitude).format(undefined, {latLonSeparator: ', ',  decimalPlaces: 0})}</span>}
        </Marquee>
    )
}