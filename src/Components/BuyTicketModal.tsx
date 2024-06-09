import React, { ReactNode, useState } from 'react';
import { Button, Col, Container, Form, FormCheck, FormText, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row, Stack } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaChild, FaMinus, FaPerson, FaPersonCane, FaPlus } from "react-icons/fa6";
import './BuyTicketModal.css';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

function Spinner({ value, onChange }: Readonly<{ value: number, onChange: (value: number) => void }>) {
    return (
        <Container fluid className='my-1 spinner'>
            <Row>
                <Col className='gx-0'>
                    <FaMinus onClick={() => onChange(Math.max(0, value - 1))} />
                </Col>
                <Col className='gx-0'>
                    <input style={{ width: '40px' }} type='number' value={value} onChange={(event) => onChange(parseInt(event.currentTarget.value))} />
                </Col>
                <Col className='gx-0'>
                    <FaPlus onClick={() => onChange(value + 1)} />
                </Col>
            </Row>
        </Container>
    )
}

function LabelControl({ title, icon, children }: Readonly<{ title: string, icon: ReactNode, children: ReactNode }>) {
    return (
        <Container fluid>
            <Row>
                <Col sm={'auto'}>
                    {icon}
                </Col>
                <Col>
                    <Row>
                        {title}
                    </Row>
                    <Row>
                        {children}
                    </Row>
                </Col>
            </Row>
        </Container>);
}

function TicketControl({ title, icon, children }: Readonly<{ title: string, icon: ReactNode, children: ReactNode }>)
{
    return (
        <Container fluid>
            <Row>
                <Col sm={'auto'}>
                    {icon}
                </Col>
                <Col>
                    <Row>
                        {title}
                    </Row>
                    <Row>
                        {children}
                    </Row>
                </Col>
            </Row>
            <hr/>
            <Row>
                <p>Options</p>
            </Row>
            <Row>
                <FormCheck label={'Rides'}/>
                <FormCheck label={'Go Karts'}/>
                <FormCheck label={'Fishing'}/>
            </Row>
        </Container>);
}

function ResultCost({title, value}: Readonly<{title: string, value: number}>)
{
    return (
        <div>
            <span>{title}</span>
            <span style={{float: 'right', textAlign: 'right'}}>{value}</span>
        </div>
    )
}

export default function BuyTicketModal({show, setShow}: Readonly<{show: boolean, setShow: (arg0: boolean) => void}>) {
    const [date, setDate] = useState(new Date());
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);
    const isDesktop = useMediaQuery({minWidth: 992});
    const navigateTo = useNavigate();

    return (
        <Modal show={show} onHide={() => setShow(false)} className='modal-right'>
            <ModalHeader closeButton>
                <ModalTitle>Book Tickets</ModalTitle>
            </ModalHeader>
            <ModalBody id='buy-modal-body'>
                <Form>
                    <Stack>
                        <LabelControl title='Select a date' icon={<FaCalendarAlt className='modal-icon'/>}>
                            <Flatpickr value={date} onChange={([date]) => { setDate(date); }} options={{ showMonths: 2, minDate: 'today' }} />
                        </LabelControl>
                        <Stack direction={isDesktop ? 'horizontal' : 'vertical'} className='px-0 py-3' gap={1}>
                            <TicketControl title='Adults' icon={<FaPerson className='modal-icon'/>}>
                                <Spinner value={adult} onChange={setAdult} />
                            </TicketControl>
                            <div className='vr' />
                            <TicketControl title='Children' icon={<FaChild style={{fontSize: '1.3em', bottom: '0'}} className='modal-icon'/>}>
                                <Spinner value={children} onChange={setChildren} />
                            </TicketControl>
                        </Stack>
                    </Stack>
                    <FormText>* Children tickets apply for height from 100cm - 140cm.</FormText>
                </Form>
            </ModalBody>
            <ModalFooter className='d-flex'>
                <Stack gap={2}>
                    <ResultCost title='Ticket price' value={0}/>
                    <ResultCost title='Discount' value={0}/>
                    <hr/>
                    <ResultCost title='Total' value={0}/>
                    <Button onClick={() => {navigateTo('/checkout'); setShow(false); }} className='flex-grow-1'>
                        Book
                    </Button>
                </Stack>
            </ModalFooter>
        </Modal>
    )
}