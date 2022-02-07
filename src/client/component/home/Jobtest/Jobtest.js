import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './Jobtest.css';
import JobtestSub from './JobtestSub';

function Jobtest(props) {
    return (
        <div className='jobtest'>
            <Container>
                <div className='text-center'>
                    <h3 className='topic-1'>চাকরি পরীক্ষা প্রস্তুতি</h3>
                    <p className='topic-2'>আপনি কোন চাকরির জন্য প্রস্তুতি নিচ্ছেন?</p>
                </div>

                <Row>
                    <JobtestSub />
                    <JobtestSub />
                    <JobtestSub />
                    <JobtestSub />
                </Row>
                {/* <Row className='pt-3'>
                    <JobtestSub />
                    <JobtestSub />
                </Row> */}

                <div className='text-center pt-0 mt-5' >
                    <Button className='m-auto ' style={{ padding: '13px 26px 13px 26px', backgroundColor: '#27895D', border: '0px' }}> সকল কোর্স দেখো </Button>
                </div>
            </Container>
        </div>
    );
}

export default Jobtest;