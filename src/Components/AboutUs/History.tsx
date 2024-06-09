import React from "react";
import { Card, CardBody, Col, Container, Image, Row, Stack, Tab, Tabs } from "react-bootstrap";
import './History.css';

type HistoryMark = {
    year: string,
    title: string,
    description: string,
    image: string
};

const timeline: HistoryMark[] = [
    {
        year: '1904',
        title: 'Breaking Ground',
        description: 'Park founder William Gehlhaus and his associates purchase some waterfront property to build a summer resort.',
        image: 'https://keansburgamusementpark.com/wp-content/uploads/2015/04/sharkproof-net_web.png'
    },
    {
        year: '1910',
        title: 'Keansburg Steamboat Company',
        description: "New Yorkers can now take a 50-cent roundtrip voyage from Battery Park to Keansburg's newest boardwalk & attractions.",
        image: 'https://keansburgamusementpark.com/wp-content/uploads/2015/04/ferry_web.png'
    },
    {
        year: '1931',
        title: 'Mystery Ride Opens',
        description: 'One of the world’s oldest operating dark rides in the world up until Hurricane Sandy, The Spook Housefirst opens.',
        image: 'https://keansburgamusementpark.com/wp-content/uploads/2015/04/spook-house-1940s.jpg'
    },
    {
        year: '1995',
        title: 'The Next Generation',
        description: 'The grandsons of William Gehlhaus purchase the park.',
        image: 'https://keansburgamusementpark.com/wp-content/uploads/2015/04/newspaper_detail_web1.png'
    },
    {
        year: '2012',
        title: 'Superstorm Sandy',
        description: 'Following a great summer, one of the most devastating storms in recent memory upends the park and surrounding communities.',
        image: 'https://keansburgamusementpark.com/wp-content/uploads/2015/04/2012-10-31-13.53.58-2.jpg'
    },
    {
        year: '2013',
        title: 'Back in Action!',
        description: 'The parks re-open after a great deal of teamwork, dedication, and repairing in Sandy’s wake.',
        image: 'https://keansburgamusementpark.com/wp-content/uploads/2015/04/Park-Reopens.jpg'
    },
    {
        year: '2015',
        title: 'The Summer of Fun!',
        description: 'You make your triumphant return to Keansburg Amusement Park!',
        image: 'https://keansburgamusementpark.com/wp-content/uploads/2015/04/Frog-Hopper.jpg'
    }
];

export default function History()
{
    return (
        <Container className="my-5">
            <Row>
                <h2>History</h2>
            </Row>
            <Row>
                <Card>
                    <CardBody>
                    <Tabs defaultActiveKey={timeline[0].year} fill>
                        {timeline.map(time => [
                            <Tab eventKey={time.year} title={time.year}>
                                <Container className="mt-3">
                                    <Row>
                                        <Col md={'6'}>
                                            <Stack gap={3}>
                                                <h4 className="time-title">{time.title}</h4>
                                                <p className="time-desc">{time.description}</p>
                                            </Stack>
                                        </Col>
                                        <Col md={'6'}>
                                            <Image className="time-image" fluid src={time.image}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                        ])}
                    </Tabs>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}