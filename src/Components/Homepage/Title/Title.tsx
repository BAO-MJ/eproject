import React from "react";
import { Row } from "react-bootstrap";
import PageBanner from "../../PageBanner.tsx";

export default function Title() {
    return (
        <PageBanner image={'header.png'}>
            <Row>
                <h1 style={{textTransform: 'uppercase', fontSize: '30px',color:'#FFEDC8'}}>Keansburg Amusement Park</h1>
            </Row>
            <Row>
                <h3 style={{textTransform: 'uppercase', fontSize: '40px' }}><b style={{color:'#FFEDC8'}}>An amusement park for everyone</b></h3>
            </Row>
            <Row>
                <h4 style={{color:'#FFEDC8'}}>Opening hours: Varies</h4>
            </Row>
        </PageBanner>
    )
}