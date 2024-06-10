import React from "react";
import { Badge, Button, Card, CardBody, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Table } from "react-bootstrap";
import './Checkout.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft, FaCreditCard, FaMoneyBill, FaPaypal, FaQrcode, FaTicket, FaWallet } from "react-icons/fa6";
import { BiSolidReceipt } from "react-icons/bi";
import PageBanner from "../PageBanner.tsx";

const Buytickets = () => {
    return (
        <main id="checkout">
            <PageBanner image="https://keansburgamusementpark.com/wp-content/themes/barebones/assets/images/banners/page-banner.png"/>
            <Container>
                <Row>
                    <p className="h1 text-center text-white"><b>Checkout</b></p>
                </Row>
                <Row>
                    <Col xl={'8'}>
                        <Card>
                            <CardBody>
                                <ol className="activity-checkout mb-0 px-4 mt-3">
                                    <li className="checkout-item">
                                        <div className="avatar checkout-icon p-1">
                                            <div className="avatar-title rounded-circle bg-primary">
                                                <BiSolidReceipt/>
                                            </div>
                                        </div>
                                        <div className="feed-item-list">
                                            <div>
                                                <h5 className="font-size-16 mb-1">Representative Info</h5>
                                                <p className="text-muted text-truncate mb-4">
                                                    Fill the representative's personal information
                                                </p>
                                                <div className="mb-3">
                                                    <Form>
                                                        <Row>
                                                            <Col lg={'4'}>
                                                                <FormGroup controlId="billing-name" className="mb-3">
                                                                    <FormLabel>Name *</FormLabel>
                                                                    <FormControl type="text" placeholder="Enter name"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg={'4'}>
                                                                <FormGroup controlId="billing-email-address" className="mb-3">
                                                                    <FormLabel>Email Address</FormLabel>
                                                                    <FormControl type="email" placeholder="Enter email" />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg={'4'}>
                                                                <FormGroup controlId="billing-phone" className="mb-3">
                                                                    <FormLabel>Phone *</FormLabel>
                                                                    <FormControl type="text" placeholder="Enter Phone no." />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <FormGroup controlId="billing-address" className="mb-3">
                                                            <FormLabel>Address *</FormLabel>
                                                            <FormControl as={"textarea"} rows={4} placeholder="Enter full address" />
                                                        </FormGroup>
                                                        <Row>
                                                            <Col lg={'6'}>
                                                                <FormGroup controlId="billing-city" className="mb-4 mb-lg-0">
                                                                    <FormLabel>City *</FormLabel>
                                                                    <FormControl type="text" placeholder="Enter City" />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg={'6'}>
                                                                <FormGroup controlId="zip-code" className="mb-0">
                                                                    <FormLabel>Zip / Postal code</FormLabel>
                                                                    <FormControl type="text" placeholder="Enter Postal code" />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="checkout-item">
                                        <div className="avatar checkout-icon p-1">
                                            <div className="avatar-title rounded-circle bg-primary">
                                                <i className="bx bxs-truck text-white font-size-20" />
                                            </div>
                                        </div>
                                        <div className="feed-item-list">
                                            <div>
                                                <h5 className="font-size-16 mb-1">Ticket Type</h5>
                                                <p className="text-muted text-truncate mb-4">
                                                    Select your preferred ticket type (Recommend using digital ticket)
                                                </p>
                                                <div className="mb-3">
                                                    <Row>
                                                        <Col lg={'6'} className="mb-3 mb-lg-0">
                                                            <div data-bs-toggle="collapse">
                                                                <label className="card-radio-label">
                                                                    <input
                                                                        type="radio"
                                                                        name="ticket-type"
                                                                        id="digi-ticket"
                                                                        className="card-radio-input"
                                                                    />
                                                                    <span className="card-radio py-3 text-center text-truncate">
                                                                        <FaQrcode className="d-block h1 mb-3 mx-auto"/>
                                                                        Digital (QR Code)
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </Col>
                                                        <Col lg={'6'}>
                                                            <div>
                                                                <label className="card-radio-label">
                                                                    <input
                                                                        type="radio"
                                                                        name="ticket-type"
                                                                        id="tradi-ticket"
                                                                        className="card-radio-input"
                                                                    />
                                                                    <span className="card-radio py-3 text-center text-truncate">
                                                                        <FaTicket className="d-block h1 mb-3 mx-auto"/>
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
                                                <FaWallet/>
                                            </div>
                                        </div>
                                        <div className="feed-item-list">
                                            <div>
                                                <h5 className="font-size-16 mb-1">Payment Info</h5>
                                                <p className="text-muted text-truncate mb-4">
                                                    Select your paying method (COD is only allowed for standard ticket)
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-size-14 mb-3">Payment method :</h5>
                                                <Row>
                                                    <Col sm={'6'} lg={'4'}>
                                                        <div data-bs-toggle="collapse">
                                                            <label className="card-radio-label">
                                                                <input
                                                                    type="radio"
                                                                    name="pay-method"
                                                                    id="pay-methodoption1"
                                                                    className="card-radio-input"
                                                                />
                                                                <span className="card-radio py-3 text-center text-truncate">
                                                                    <FaCreditCard className="d-block h2 mb-3 mx-auto" />
                                                                    Credit / Debit Card
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col sm={'6'} lg={'4'}>
                                                        <div>
                                                            <label className="card-radio-label">
                                                                <input
                                                                    type="radio"
                                                                    name="pay-method"
                                                                    id="pay-methodoption2"
                                                                    className="card-radio-input"
                                                                />
                                                                <span className="card-radio py-3 text-center text-truncate">
                                                                    <FaPaypal className="d-block h2 mb-3 mx-auto" />
                                                                    Paypal
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col sm={'6'} lg={'4'}>
                                                        <div>
                                                            <label className="card-radio-label">
                                                                <input
                                                                    type="radio"
                                                                    name="pay-method"
                                                                    id="pay-methodoption3"
                                                                    className="card-radio-input"
                                                                    defaultChecked=""
                                                                />
                                                                <span className="card-radio py-3 text-center text-truncate">
                                                                    <FaMoneyBill className="d-block h2 mb-3 mx-auto" />
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
                                <Button variant="link" className="text-muted" href="ecommerce-products.html">
                                    <FaArrowLeft/><span className="align-middle">&nbsp;Continue Shopping</span>
                                </Button>
                            </Col>
                            <Col>
                                <div className="text-end mt-2 mt-sm-0">
                                    <Button variant="success" href="#">
                                        <FaShoppingCart/><span className="align-middle">&nbsp;Proceed</span>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={'4'}>
                        <Card className="checkout-order-summary">
                            <CardBody>
                                <div className="p-3 bg-light mb-3">
                                    <h5 className="font-size-16 mb-0">
                                        Order Summary <span className="float-end ms-2">#MN0124</span>
                                    </h5>
                                </div>
                                <Table responsive>
                                    <table className="table table-centered mb-0 table-nowrap">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="border-top-0"
                                                    style={{ width: 110 }}
                                                    scope="col"
                                                >
                                                    Product
                                                </th>
                                                <th className="border-top-0" scope="col">
                                                    Product Desc
                                                </th>
                                                <th className="border-top-0" scope="col">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <img
                                                        src="https://www.bootdey.com/image/280x280/FF00FF/000000"
                                                        alt="product-img"
                                                        title="product-img"
                                                        className="avatar-lg rounded"
                                                    />
                                                </th>
                                                <td>
                                                    <h5 className="font-size-16 text-truncate">
                                                        <a href="#" className="text-dark">
                                                            Waterproof Mobile Phone
                                                        </a>
                                                    </h5>
                                                    <p className="text-muted mb-0">
                                                        <i className="bx bxs-star text-warning" />
                                                        <i className="bx bxs-star text-warning" />
                                                        <i className="bx bxs-star text-warning" />
                                                        <i className="bx bxs-star text-warning" />
                                                        <i className="bx bxs-star-half text-warning" />
                                                    </p>
                                                    <p className="text-muted mb-0 mt-1">$ 260 x 2</p>
                                                </td>
                                                <td>$ 520</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <img
                                                        src="https://www.bootdey.com/image/280x280/FF00FF/000000"
                                                        alt="product-img"
                                                        title="product-img"
                                                        className="avatar-lg rounded"
                                                    />
                                                </th>
                                                <td>
                                                    <h5 className="font-size-16 text-truncate">
                                                        <a href="#" className="text-dark">
                                                            Smartphone Dual Camera
                                                        </a>
                                                    </h5>
                                                    <p className="text-muted mb-0">
                                                        <i className="bx bxs-star text-warning" />
                                                        <i className="bx bxs-star text-warning" />
                                                        <i className="bx bxs-star text-warning" />
                                                        <i className="bx bxs-star text-warning" />
                                                    </p>
                                                    <p className="text-muted mb-0 mt-1">$ 260 x 1</p>
                                                </td>
                                                <td>$ 260</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <h5 className="font-size-14 m-0">Sub Total :</h5>
                                                </td>
                                                <td>$ 780</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <h5 className="font-size-14 m-0">Discount :</h5>
                                                </td>
                                                <td>- $ 78</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <h5 className="font-size-14 m-0">Shipping Charge :</h5>
                                                </td>
                                                <td>$ 25</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <h5 className="font-size-14 m-0">Estimated Tax :</h5>
                                                </td>
                                                <td>$ 18.20</td>
                                            </tr>
                                            <tr className="bg-light">
                                                <td colSpan={2}>
                                                    <h5 className="font-size-14 m-0">Total:</h5>
                                                </td>
                                                <td>$ 745.2</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Buytickets;
