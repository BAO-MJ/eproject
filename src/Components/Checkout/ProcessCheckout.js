import React, { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Oval } from "react-loader-spinner";
import { Checkmark } from "react-checkmark";
import GenericForm from "../GenericForm";
import QRCode from "react-qr-code";
import { useTimeout } from "usehooks-ts";

export default function ProcessCheckout() {
  const [success, setSuccess] = useState(false);
  const [id, setID] = useState("");
  const [ticketType, setTicketType] = useState("");

  useEffect(() => {
    setID(JSON.parse(localStorage.getItem("checkout") ?? "{}")["id"]);
    setTicketType(localStorage.getItem("ticketType") ?? "standard");
  }, []);

  useTimeout(() => setSuccess(true), 10 * 1000);

  return (
    <GenericForm
      title={
        !success
          ? "Processing tickets. Please wait warmly..."
          : "Tickets processed successfully!"
      }
      containerClass="container-md-forced"
    >
      <Stack gap={3} className="mt-3">
        {!success ? (
          <Oval
            secondaryColor="lightblue"
            color="blue"
            width={192}
            height={192}
            strokeWidth={3}
            wrapperClass="mx-auto my-3 justify-content-center"
          />
        ) : ticketType === "standard" ? (
          <Checkmark size="192px" color="blue" />
        ) : (
          <QRCode
            className="mx-auto my-3 justify-content-center"
            value="https://youtu.be/dQw4w9WgXcQ?si=nbs82kG3V1faOR3Y"
            size={192}
          />
        )}
        <p className="h4 text-center">
          <b>Ticket ID: {id}</b>
        </p>
        {success && (
          <p className="text-muted text-center">
            {ticketType === "standard"
              ? "Show this to the ticket booth to gain your tickets."
              : "Use the QR code above to gain entry through the allowed scanners."}
          </p>
        )}
      </Stack>
    </GenericForm>
  );
}
