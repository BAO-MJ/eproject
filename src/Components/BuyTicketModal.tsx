import React, { ReactNode, useMemo, useState } from 'react';
import { Button, Col, Container, Form, FormCheck, FormText, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row, Stack } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaChild, FaMinus, FaPerson, FaPlus } from "react-icons/fa6";
import './BuyTicketModal.css';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

function Spinner({ value, onChange }: Readonly<{ value: number, onChange: (value: number) => void }>) {
    return (
        <Container fluid className='my-1 spinner'>
            <Row>
                <Col sm={'auto'} className='gx-0'>
                    <FaMinus onClick={() => onChange(Math.max(0, value - 1))} />
                </Col>
                <Col className='gx-0'>
                    <input className='w-100' type='number' value={value} onChange={(event) => onChange(parseInt(event.currentTarget.value))} />
                </Col>
                <Col sm={'auto'}>
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

function TicketControl({ title, icon, children, onOptionChange }: Readonly<{ title: string, icon: ReactNode, children: ReactNode, onOptionChange: React.Dispatch<React.SetStateAction<boolean[]>> }>)
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
            <Row style={{paddingLeft: 'calc(var(--bs-gutter-x)* .5)'}}>
                <FormCheck onChange={(event) => onOptionChange(old => old.with(0, event.target.checked)) } label={'Rides'}/>
                <FormCheck onChange={(event) => onOptionChange(old => old.with(1, event.target.checked)) } label={'Go Karts'}/>
                <FormCheck onChange={(event) => onOptionChange(old => old.with(2, event.target.checked)) } label={'Fishing'}/>
            </Row>
        </Container>);
}

function ResultCost({title, value}: Readonly<{title: string, value: number}>)
{
    return (
        <div>
            <span>{title}</span>
            <span style={{float: 'right', textAlign: 'right'}}>{'$' + value.toFixed(2)}</span>
        </div>
    )
}

export default function BuyTicketModal({show, setShow}: Readonly<{show: boolean, setShow: (arg0: boolean) => void}>) {
    const [date, setDate] = useState(new Date());
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);
    const [adultOptions, setAdultOptions] = useState([false, false, false]);
    const [childrenOptions, setChildrenOptions] = useState([false, false, false]);

    const price = useMemo<number>(() => {
        // @ts-ignore
        let adultUnitPrice = adultOptions[0] * 1.35 + adultOptions[1] * 8.5 + adultOptions[2] * 12;
        // @ts-ignore
        let childUnitPrice = childrenOptions[0] * 1.35 + childrenOptions[1] * 5 + childrenOptions[2] * 6;
        
        return adult * adultUnitPrice + children * childUnitPrice;
    }, [adult, children, adultOptions, childrenOptions]);

    const discount = useMemo<number>(() => {
        const segmentDiscount = (current: number, segment: {amount: number, discount: number}[]) => {
            let value = 0;
            
            // assume that it is sorted
            for (let i = segment.length - 1; i >= 0; --i) {
                // https://stackoverflow.com/questions/4228356/how-to-perform-an-integer-division-and-separately-get-the-remainder-in-javascr
                value += (~~(current / segment[i].amount)) * segment[i].discount;
                current %= segment[i].amount;
            }
            
            return value;
        };

        let discount = 0;
        // @ts-ignore
        const riders = adultOptions[0] * adult + childrenOptions[0] * children;

        discount += segmentDiscount(riders, [{ amount: 50, discount: 17.55 }, {amount: 100, discount: 45.05}, {amount: 200, discount: 110.05}]);

        if (adultOptions[1]) {
            discount += segmentDiscount(adult, [{ amount: 4, discount: 2 }, { amount: 8, discount: 9 }]);
        }

        return discount;
    }, [adult, children, adultOptions, childrenOptions]);

    const total = useMemo(() => { return price - discount }, [price, discount]);

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
                            <Flatpickr className='border-0 px-0' value={date} onChange={([date]) => { setDate(date); }} options={{ showMonths: 2, minDate: 'today' }} />
                        </LabelControl>
                        <Stack direction={isDesktop ? 'horizontal' : 'vertical'} className='px-0 py-3' gap={1}>
                            <TicketControl title='Adults' icon={<FaPerson className='modal-icon'/>} onOptionChange={setAdultOptions}>
                                <Spinner value={adult} onChange={setAdult} />
                            </TicketControl>
                            <div className='vr' />
                            <TicketControl title='Children' icon={<FaChild style={{fontSize: '1.3em', bottom: '0'}} className='modal-icon'/>} onOptionChange={setChildrenOptions}>
                                <Spinner value={children} onChange={setChildren} />
                            </TicketControl>
                        </Stack>
                    </Stack>
                    <FormText>* Children tickets apply for height from 100cm - 140cm.</FormText>
                </Form>
            </ModalBody>
            <ModalFooter className='d-flex'>
                <Stack gap={2}>
                    <ResultCost title='Ticket price' value={price}/>
                    <ResultCost title='Discount' value={discount}/>
                    <hr/>
                    <ResultCost title='Total' value={total}/>
                    <Button disabled={total === 0} onClick={() => {navigateTo('/checkout'); setShow(false); }} className='flex-grow-1'>
                        Book
                    </Button>
                </Stack>
            </ModalFooter>
        </Modal>
    )
}