import React from 'react';
import { Col } from 'react-bootstrap';

function HeadingSubBox(props) {
    const { icons, color, backColor, title, des } = props.data;
    return (
        <Col md={4} xs={6}>
            <div className='  box-23 c p-4'>
                <div className="m-auto mb-2 boxt1" style={backColor}>
                    <h1 className='pt-1 box1-10' style={color}>{icons}</h1>
                </div>
                <div className="content">
                    <div className="mb-2 box1-11" style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Inter, "Noto Sans Bengali", sans-serif', lineHeight: '28px', color: '#000000' }}> {title}
                    </div>
                    <div className="des " style={{ color: '#676767', fontFamily: 'Inter, "Noto Sans Bengali", sans-serif', fontSize: '15px', fontWeight: '400', lineHeight: '24px' }}> {des} </div>
                </div>
            </div>
        </Col>
    );
}

export default HeadingSubBox;