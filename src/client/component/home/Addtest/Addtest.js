import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './Addtest.css'
import AddtestSub from './AddtestSub';

function Addtest(props) {
    return (
        <div className='addtest'>
            <Container>
                <div className='text-center'>
                    <h3 className='topic-1'>ভর্তি পরীক্ষা </h3>
                    <p className='topic-2'>স্বপ্নের ভার্সিটিতে ভর্তি হয়ে যাও</p>
                </div>

                <Row>
                    <AddtestSub/>
                    <AddtestSub/>
                </Row>
                <Row className='pt-3'>
                    <AddtestSub/>
                    <AddtestSub/>
                </Row>

                <div className='text-center pt-0 mt-4' >
                <Button className='m-auto ' style={{padding:'13px 26px 13px 26px', backgroundColor:'#27895D', border:'0px'}}> সকল প্রোগ্রাম দেখো </Button>
                </div>
            </Container>
        </div>
    );
}

export default Addtest;