import React from 'react';
import { Col } from 'react-bootstrap';

function HeadingTopicBox(props) {
    const { color, topic, icons } = props.data;
    return (
        <Col className='box-18' md={3} xs={6}>
            <div className='d-flex dflex' style={color}>
                <h1 className=''>{icons}</h1>
                <h1 className='h1color' style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, "Noto Sans Bengali", sans-serif', lineHeight: '28px', color: '#000000', marginTop: '15px' }}>{topic}</h1>
            </div>
        </Col>
    );
}

export default HeadingTopicBox;