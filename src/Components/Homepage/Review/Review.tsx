import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import './Review.css';

type CustomerReview = {
    stars: number,
    review: string,
    reviewer: string
}

const reviews: CustomerReview[] = [
    {
        stars: 5,
        review: "Got the weekday pass. It was worth it. My son had a ball. A full day of fun for one price. Water park and amusement park.",
        reviewer: "Avery Sims"
    },
    {
        stars: 5,
        review: "Wonderful and beautiful day, great food, great water park, and enjoyed the arcade. This was a birthday celebration for my daughter and her father. We love Keansburg.",
        reviewer: "April Dockery"
    },
    {
        stars: 5,
        review: "If your in Jersey, one of the nostalgic favorites you have to visit is keansburg! Simple classic family fun, rides, food, arcade and the beach that won't break the bank.",
        reviewer: "KJ"
    },
    {
        stars: 5,
        review: "Good place for kids, teens, and all. They have plenty of rides for young kids as well as adults. Plenty of places to grab a snack and drinks. Plenty of parking available nearby. Good place to spend a few hours with the kids / friends / family.",
        reviewer: "Mital Shah"
    }
];


export default function Review()
{
    return (
        <Carousel touch className="px-5 pt-3 pb-5" controls={false}>
            {reviews.map((review, i) => (
                <CarouselItem key={i} className="review-item">
                    <p className="review-stars pt-5">{'★'.repeat(review.stars)}</p>
                    <p className="review-text d-flex justify-content-center align-items-center"><span>{'"' + review.review + '"'}</span></p>
                    <p className="review-reviewer">{review.reviewer}</p>
                </CarouselItem>
            ))}
        </Carousel>
    );
}