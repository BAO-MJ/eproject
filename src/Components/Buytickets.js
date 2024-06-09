import React from "react";
import { Badge, Button, Card, Col, Container, InputGroup, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

const Buytickets = () => {
    return (
        <>
            {/* Main layout */}
            <main className="mt-5 pt-4">
                <Container>
                    {/*  Heading  */}
                    <h2 className="my-5 text-center">Checkout form</h2>

                    {/* Grid row */}
                    <Row>
                        {/* Grid column */}
                        <Col md={'8'} className="mb-4">
                            {/* Card */}
                            <Card className="p-4">
                                {/* Grid row */}
                                <Row className="mb-3">
                                    {/* Grid column */}
                                    <Col md={'6'} className="mb-2">
                                        {/* firstName */}
                                        <div>
                                            <input type="text" id="typeText" className="form-control" />
                                            <label className="form-label" for="typeText">First name</label>
                                        </div>
                                    </Col>
                                    {/* Grid column */}

                                    {/* Grid column */}
                                    <Col md={'6'} className="mb-2">
                                        {/* lastName */}
                                        <div>
                                            <input type="text" id="typeText" className="form-control" />
                                            <label className="form-label" for="typeText">Last name</label>
                                        </div>
                                    </Col>
                                    {/* Grid column */}
                                </Row>
                                {/* Grid row */}

                                {/* Username */}
                                <InputGroup className="mb-4">
                                    <InputGroupText id="basic-addon1">@</InputGroupText>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </InputGroup>

                                {/* email */}
                                <p className="mb-0">
                                    Email (optional)
                                </p>
                                <div className="mb-4">
                                    <input type="email" className="form-control" placeholder="youremail@example.com" aria-label="youremail@example.com" aria-describedby="basic-addon1" />
                                </div>

                                {/* address */}
                                <p className="mb-0">
                                    Address
                                </p>
                                <div className="mb-4">
                                    <input type="email" className="form-control" placeholder="1234 Main St" aria-label="1234 Main St" aria-describedby="basic-addon1" />
                                </div>

                                {/* Grid row */}
                                <Row>
                                    {/* Grid column */}
                                    <Col lg={'4'} md={'12'} className="mb-4">
                                        <p className="mb-0">
                                            Country
                                        </p>
                                        <div className="form-outline mb-4">
                                            <input type="email" className="form-control" placeholder="United States" aria-label="United States" aria-describedby="basic-addon1" />
                                        </div>
                                    </Col>
                                    {/* Grid column */}

                                    {/* Grid column */}
                                    <Col lg={'4'} md={'12'} className="mb-4">
                                        <p className="mb-0">
                                            State
                                        </p>
                                        <div className="form-outline mb-4">
                                            <input type="email" className="form-control" placeholder="California" aria-label="California" aria-describedby="basic-addon1" />
                                        </div>
                                    </Col>
                                    {/* Grid column */}

                                    {/* Grid column */}
                                    <Col lg={'4'} md={'12'} className="mb-4">
                                        <p className="mb-0">
                                            Zip
                                        </p>
                                        <div className="form-outline">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </Col>
                                    {/* Grid column */}
                                </Row>
                                {/* Grid row */}

                                <hr />
                                <div>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">Shipping address is the same as my billing address</label>
                                </div>

                                <div>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">Save this information for next time</label>
                                </div>

                                <hr />

                                <div className="my-3">
                                    <div>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                        <label className="form-check-label" for="flexRadioDefault1"> Credit card </label>
                                    </div>

                                    <div>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2"> Debit card </label>
                                    </div>
                                    <div>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label className="form-check-label" for="flexRadioDefault3"> Paypal </label>
                                    </div>
                                </div>
                                <Row className="mb-3">
                                    <Col md={'6'} className="mb-3">
                                        <p className="mb-0">
                                            Name on card
                                        </p>
                                        <div className="form-outline">
                                            <input type="text" className="form-control" />
                                            <div className="form-helper">Full name as displayed on card</div>
                                        </div>
                                    </Col>
                                    <Col md={'6'} className="mb-3">
                                        <p className="mb-0">
                                            Credit card number
                                        </p>
                                        <div className="form-outline">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={'3'} className="mb-3">
                                        <p className="mb-0">
                                            Expiration
                                        </p>
                                        <div className="form-outline">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </Col>
                                    <Col md={'3'} className="mb-3">
                                        <p className="mb-0">
                                            CVV
                                        </p>
                                        <div className="form-outline">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </Col>
                                </Row>
                                <hr className="mb-4" />
                                <Button variant="primary" type="button">Continue to checkout</Button>
                            </Card>
                            {/* /.Card */}
                        </Col>
                        {/* Grid column */}

                        {/* Grid column */}
                        <Col md={'4'} className="mb-4">
                            {/*  Heading  */}
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your cart</span>
                                <Badge pill bg='primary'>3</Badge>
                            </h4>

                            {/*  Cart  */}
                            <ListGroup className="mb-3">
                                <ListGroupItem className="d-flex justify-content-between">
                                    <div>
                                        <h6 className="my-0">Product name</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$12</span>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">
                                    <div>
                                        <h6 className="my-0">Second product</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$8</span>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">
                                    <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                    </div>
                                    <span className="text-success">-$5</span>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </ListGroupItem>
                            </ListGroup>
                            {/*  Cart  */}

                            {/*  Promo code  */}
                            <form className="card p-2">
                                <InputGroup className="mb-3">
                                    <input type="text" className="form-control" placeholder="Promo code" />
                                    <Button variant="primary" id="button-addon2">
                                        Redeem
                                    </Button>
                                </InputGroup>
                            </form>
                            {/*  Promo code  */}
                        </Col>
                        {/* Grid column */}
                    </Row>
                    {/* Grid row */}
                </Container>
            </main>
            {/* Main layout */}
        </>);

};

export default Buytickets;
