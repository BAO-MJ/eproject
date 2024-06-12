import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  ListGroup,
  ListGroupItem,
  Row,
  Table,
} from "react-bootstrap";
import "./Checkout.css";
import { FaShoppingCart } from "react-icons/fa";
import {
  FaArrowLeft,
  FaCreditCard,
  FaMoneyBill,
  FaPaypal,
  FaQrcode,
  FaTicket,
  FaWallet,
} from "react-icons/fa6";
import { BiSolidReceipt } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

const Checkout = ({ setModalShow }) => {
  const [ticketType, setTicketType] = useState("digital");
  const navigateTo = useNavigate();

  const onTicketTypeChange = (event) => {
    setTicketType(event.currentTarget.value);
  };

  const [ticketData] = useLocalStorage(
    "checkout",
    {
      date: new Date().toLocaleDateString("vi-VN"),
      id: "",
      tickets: {},
      cost: { price: 0, discount: 0, total: 0 },
    },
    {
      deserializer: (value) => JSON.parse(value),
      serializer: (value) => JSON.stringify(value),
    }
  );

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      localStorage.setItem("ticketType", ticketType);
      navigateTo("/forms/checkout/process");
    }
    setValidated(true);
  };

  return (
    <main id="checkout" className="mt-3">
      <Container>
        <Row>
          <p className="h1 text-center">
            <b style={{color:'#1e85be'}}>Checkout form</b>
          </p>
        </Row>
        <Row>
          <Form
            className="col-xl-8"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Card>
              <CardBody>
                <ol className="activity-checkout mb-0 px-4 mt-3">
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <BiSolidReceipt />
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">
                          Representative Info
                        </h5>
                        <p className="text-muted text-truncate mb-4">
                          Fill the representative's personal information
                        </p>
                        <div className="mb-3">
                          <div>
                            <Row>
                              <Col lg={"4"}>
                                <FormGroup
                                  controlId="billing-name"
                                  className="mb-3"
                                >
                                  <FormLabel style={{color:'black'}}>Name *</FormLabel>
                                  <FormControl
                                    type="text"
                                    placeholder="Enter name"
                                    required
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide your name.
                                  </Form.Control.Feedback>
                                </FormGroup>
                              </Col>
                              <Col lg={"4"}>
                                <FormGroup
                                  controlId="billing-email-address"
                                  className="mb-3"
                                >
                                  <FormLabel style={{color:'black'}}>Email Address*</FormLabel>
                                  <FormControl
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide your email address.
                                  </Form.Control.Feedback>
                                </FormGroup>
                              </Col>
                              <Col lg={"4"}>
                                <FormGroup
                                  controlId="billing-phone"
                                  className="mb-3"
                                >
                                  <FormLabel >Phone *</FormLabel>
                                  <FormControl
                                    type="text"
                                    placeholder="Enter Phone no."
                                    required
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide your phone number.
                                  </Form.Control.Feedback>
                                </FormGroup>
                              </Col>
                            </Row>
                            <FormGroup
                              controlId="billing-address"
                              className="mb-3"
                            >
                              <FormLabel>Address *</FormLabel>
                              <FormControl
                                as={"textarea"}
                                rows={4}
                                placeholder="Enter full address"
                                required
                              />
                              <Form.Control.Feedback type="invalid">
                                Please provide your address.
                              </Form.Control.Feedback>
                            </FormGroup>
                            <Row>
                              <Col lg={"12"}>
                                <FormGroup
                                  controlId="billing-city"
                                  className="mb-4 mb-lg-0"
                                >
                                  <FormLabel>City *</FormLabel>
                                  <FormControl
                                    type="text"
                                    placeholder="Enter City"
                                    required
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide your current city.
                                  </Form.Control.Feedback>
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <IoTicket />
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Ticket Type</h5>
                        <p className="text-muted text-truncate mb-4">
                          Select your preferred ticket type (Recommend using
                          digital ticket)
                        </p>
                        <div className="mb-3">
                          <Row>
                            <Col lg={"6"} className="mb-3 mb-lg-0">
                              <div data-bs-toggle="collapse">
                                <label className="card-radio-label">
                                  <input
                                    type="radio"
                                    name="ticket-type"
                                    id="digi-ticket"
                                    className="card-radio-input"
                                    value={"digital"}
                                    onChange={onTicketTypeChange}
                                    defaultChecked
                                  />
                                  <span className="card-radio py-3 text-center text-truncate">
                                    <FaQrcode className="d-block h1 mb-3 mx-auto" />
                                    Digital (QR Code)
                                  </span>
                                </label>
                              </div>
                            </Col>
                            <Col lg={"6"}>
                              <div>
                                <label className="card-radio-label">
                                  <input
                                    type="radio"
                                    name="ticket-type"
                                    id="tradi-ticket"
                                    className="card-radio-input"
                                    value={"standard"}
                                    onChange={onTicketTypeChange}
                                  />
                                  <span className="card-radio py-3 text-center text-truncate">
                                    <FaTicket className="d-block h1 mb-3 mx-auto" />
                                    Standard
                                  </span>
                                </label>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <FaWallet />
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Payment Info</h5>
                        <p className="text-muted text-truncate mb-4">
                          Select your paying method (COD is only allowed for
                          standard ticket)
                        </p>
                      </div>
                      <div>
                        <h5 className="font-size-14 mb-3">Payment method :</h5>
                        <Row>
                          <Col sm={"6"} lg={"4"}>
                            <div data-bs-toggle="collapse">
                              <label className="card-radio-label">
                                <input
                                  type="radio"
                                  name="pay-method"
                                  id="pay-methodoption1"
                                  className="card-radio-input"
                                  value={"card"}
                                  required
                                  defaultChecked
                                />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <FaCreditCard className="d-block h2 mb-3 mx-auto" />
                                  Credit / Debit Card
                                </span>
                              </label>
                            </div>
                          </Col>
                          <Col sm={"6"} lg={"4"}>
                            <div>
                              <label className="card-radio-label">
                                <input
                                  type="radio"
                                  name="pay-method"
                                  id="pay-methodoption2"
                                  className="card-radio-input"
                                  value={"paypal"}
                                  required
                                />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <FaPaypal className="d-block h2 mb-3 mx-auto" />
                                  Paypal
                                </span>
                              </label>
                            </div>
                          </Col>
                          <Col sm={"6"} lg={"4"}>
                            <div>
                              <label className="card-radio-label">
                                <input
                                  type="radio"
                                  name="pay-method"
                                  id="pay-methodoption3"
                                  className="card-radio-input"
                                  value={"cod"}
                                  required
                                />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <FaMoneyBill
                                    className={"d-block h2 mb-3 mx-auto"}
                                  />
                                  <span>Cash on Delivery</span>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </li>
                </ol>
              </CardBody>
            </Card>
            <Row className="my-4">
              <Col>
                <Button
                  variant="link"
                  className="text-muted"
                  href="#"
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  <FaArrowLeft />
                  <span className="align-middle">&nbsp;Edit Ticket</span>
                </Button>
              </Col>
              <Col>
                <div className="text-end mt-2 mt-sm-0">
                  <Button variant="success" type="submit">
                    <FaShoppingCart />
                    <span className="align-middle">&nbsp;Proceed</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
          <Col xl={"4"}>
            <Card className="checkout-summary">
              <CardBody>
                <div className="p-3 bg-light mb-3">
                  <h5 className="font-size-16 mb-2">
                    Ticket Summary{" "}
                    <span className="float-end ms-2">{ticketData.id}</span>
                  </h5>
                  <b>Ticket Date: {ticketData.date}</b>
                </div>
                <ListGroup className="mb-3">
                  {Object.values(ticketData.tickets).map((ticket) => (
                    <ListGroupItem className="d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0 font-weight-500 text-dark" >
                          {ticket.title} x {ticket.amount}
                        </h6>
                        <small className="text-muted">
                          Includes: {ticket.options}
                        </small>
                      </div>
                      <span className="text-muted" >
                        ${ticket.price.toFixed(2)}
                      </span>
                    </ListGroupItem>
                  ))}
                  <ListGroupItem className="d-flex justify-content-between">
                    <span ><h6>Sub Total:</h6></span>
                    <span >${ticketData.cost.price.toFixed(2)}</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between text-success">
                    <span ><h6>Discount:</h6></span>
                    <span >- ${ticketData.cost.discount.toFixed(2)}</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between">
                    <span><h6>Total:</h6></span>
                    <strong >${ticketData.cost.total.toFixed(2)}</strong>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Checkout;
