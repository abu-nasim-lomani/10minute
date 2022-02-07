import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import './Topicpart.css'
import TopicSubpart from './TopicSubpart';

function Topicpart(props) {
    return (
        <div className='topicpart'>
            <Container>
                <div className='text-center'>
                    <h3 className='topic-1'>ক্লাস ১-১২ </h3>
                    <p className='topic-2'>তুমি এখন পড়াশোনার কোন পর্যায়ে আছো?</p>
                </div>

                <Row className='topic-110'>
                    <TopicSubpart />
                    <TopicSubpart />
                    <TopicSubpart />
                </Row>
                <Row className='topic-sub-110 d-none'>
                    <Carousel>
                        <Carousel.Item>
                            <TopicSubpart />
                        </Carousel.Item>
                        <Carousel.Item>
                            <TopicSubpart />
                        </Carousel.Item>
                        <Carousel.Item>
                            <TopicSubpart />
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </div>
    );
}

export default Topicpart;