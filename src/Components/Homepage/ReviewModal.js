import React, { useState } from "react";
import { Button, FormControl, Image, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Stack } from "react-bootstrap";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";

export default function ReviewModal({title, image, setShow, ...props}) {
    const [rating, setRating] = useState(0);
    const reviewLevels = ["Terrible", "Bad", "Not Bad", "Good", "Excellent"];

    const onReviewButtonClick = () => {
        Swal.fire({title: 'Review Sent', text: 'Thank you for your review!', icon: 'success'})
            .then(handleClose);
    }

    const handleClose = () => { setShow(false); setRating(0) };

    return (
        <Modal {...props} onHide={handleClose}>
            <ModalHeader closeButton>
                <ModalTitle>You're reviewing</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Stack className="align-items-center">
                    <Image style={{objectFit: 'cover'}} src={image} width={256}/>
                    <p className="h2"><b>{title}</b></p>
                    <ReactStars value={rating} count={5} onChange={setRating} size={48} isHalf emptyIcon={<FaRegStar/>} halfIcon={<FaStarHalfAlt/>} filledIcon={<FaStar/>}/>
                    <p className={rating > 0 ? "d-block" : "d-none"}>{reviewLevels[Math.ceil(rating) - 1]}</p>
                    <FormControl className={rating > 0 ? "d-block" : "d-none"} as={'textarea'} rows={4} placeholder="Please share more of your opinion..."/>
                </Stack>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onReviewButtonClick} variant="primary" className="w-100" disabled={rating === 0}>Send Review</Button>
            </ModalFooter>
        </Modal>
    )
}