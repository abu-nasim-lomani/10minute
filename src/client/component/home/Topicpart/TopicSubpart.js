import React from 'react';
import { Card, Carousel, Col } from 'react-bootstrap';
import { FaRegPlayCircle } from 'react-icons/fa';
import { BsBroadcast } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { VscBroadcast } from 'react-icons/vsc';
import academic from '../../../../images/images/academic/academic-bg.png';

function TopicSubpart(props) {
    return (
        <Col className='topic-121'>
                <Card>
                    <Card.Img className='topic-image' variant="top" src={academic} />
                    <div className='topic-text'><h2>এইচএসসি | HSC</h2></div>
                    <Card.Body>
                        <Card.Title><h2>এইচএসসি</h2></Card.Title>
                        <div className='cart-text'>
                            <div className='cart-text-menu'>
                                <p className='topic-122' style={{ fontSize: '22px' }}><FaRegPlayCircle /></p>
                                <p className='topic-123' style={{ fontSize: '14px', paddingTop: '5px', paddingLeft: '10px' }}>৫৭৭০ ফ্রি ভিডিও </p>
                            </div>
                            <div className='cart-text-menu'>
                                <p className='topic-122' style={{ fontSize: '22px' }}><FiUsers /></p>
                                <p className='topic-123' style={{ fontSize: '14px', paddingTop: '5px', paddingLeft: '10px' }}>৩৫ বিষয়  </p>
                            </div>
                        </div>
                        <div className='cart-text'>
                            <div className='cart-text-menu'>
                                <p className='topic-122' style={{ fontSize: '22px' }}><BsBroadcast /></p>
                                <p className='topic-123' style={{ fontSize: '14px', paddingTop: '5px', paddingLeft: '10px' }}>লাইভ ক্লাস  </p>
                            </div>
                            <div className='cart-text-menu'>
                                <p className='topic-122' style={{ fontSize: '22px' }}><VscBroadcast /></p>
                                <p className='topic-123' style={{ fontSize: '14px', paddingTop: '5px', paddingLeft: '10px' }}>MCQ সাজেশন  </p>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <h3 className='topic-124' style={{ fontFamily: 'Noto Sans Bengali", sans-serif', fontSize: '16px', fontWeight: '600', color: '#278981', textAlign: 'center', cursor: 'pointer' }}>বিস্তারিত দেখো </h3>
                    </Card.Footer>
                </Card>
            </Col>        
    );
}

export default TopicSubpart;