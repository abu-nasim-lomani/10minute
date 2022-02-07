import React from 'react';
import { Card, Col } from 'react-bootstrap';
import academic from '../../../../images/images/skill/thumnails-v3/IELTS_Complete_Guideline_WideT.jpg';

function JobtestSub(props) {
    return (
        <Col>
            <Card>
                <Card.Img className='topic-image' variant="top" src={academic} />
                <Card.Body>
                    <Card.Title><h2 className='jobtest-title'>বিসিএস প্রিলি কোর্স</h2></Card.Title>
                    
                </Card.Body>
                <Card.Footer>
                    <h3 style={{fontFamily:'Noto Sans Bengali", sans-serif', fontSize:'16px', fontWeight:'600', color:'#278981', textAlign:'center', cursor:'pointer'}}>বিস্তারিত দেখো </h3>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default JobtestSub;