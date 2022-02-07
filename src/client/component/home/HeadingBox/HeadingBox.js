import React from 'react';
import { FaBookReader, FaGraduationCap, FaShoppingBag, FaTelegramPlane } from 'react-icons/fa';
import './HeadingBox.css';
import HeadingSubBox from './HeadingSubBox';
import { RiBroadcastFill, RiQuestionFill } from 'react-icons/ri';
import { MdLeaderboard } from 'react-icons/md';
import { GiNotebook } from 'react-icons/gi';
import { FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa';
import HeadingTopicBox from './HeadingTopicBox';
import { Col, Container, Row } from 'react-bootstrap';

function HeadingBox() {
    const dataBox1 = [
        {
            id: 1,
            icons: <FaBookReader />,
            topic: "ক্লাস ১-১২",
            color: { color: '#5BADC9' }
        },
        {
            id: 2,
            icons: <FaGraduationCap />,
            topic: "ভর্তি পরীক্ষা",
            color: { color: '#17B992' }
        },
        {
            id: 3,
            icons: <FaShoppingBag />,
            topic: "চাকরি পরীক্ষা",
            color: { color: '#0E86CA' }
        },
        {
            id: 4,
            icons: <FaTelegramPlane />,
            topic: "কোর্স সমূহ",
            color: { color: '#8E42E9' }
        }
    ]
    const dataBox = [
        {
            id: 1,
            icons: <FaChalkboardTeacher />,
            color: { color: '#25AB6F' },
            backColor: { backgroundColor: '#EAF6F0' },
            title: 'ভিডিও লেকচার',
            des: 'শেখো নিজের ইচ্ছেমতো, পেয়ে যাও ২০ হাজারেরও বেশি ভিডিও লেকচার',

        },
        {
            id: 2,
            icons: <FaBookOpen />,
            color: { color: '#1CADF1' },
            backColor: { backgroundColor: '#E3F5FD' },
            title: 'সুবিধামত অনুশীলন',
            des: 'অনুশীলন করো সুবিধামত সময়ে, মুহূর্তেই দেখে নাও তোমার স্কোর',

        },
        {
            id: 3,
            icons: <RiBroadcastFill />,
            color: { color: '#F54135' },
            backColor: { backgroundColor: '#FEEBEB' },
            title: 'লাইভ ক্লাস',
            des: 'দৈনিক লাইভ ক্লাসে অংশ নিয়ে বজাও রাখো রুটিনমাফিক পড়াশোনা',

        },
        {
            id: 4,
            icons: <GiNotebook />,
            color: { color: '#6E1FED' },
            backColor: { backgroundColor: '#F0E9FE' },
            title: 'লেকচার শীট',
            des: 'নিমিষেই পেয়ে যাও সহায়ক লেকচার শীট এবং ইন্টার‍্যাক্টিভ বই',

        },
        {
            id: 5,
            icons: <MdLeaderboard />,
            color: { color: '#F4B840' },
            backColor: { backgroundColor: '#FDF5E2' },
            title: 'দৈনিক ফলাফল ও লিডারবোর্ড',
            des: 'শেখার প্রতিযোগিতায় বন্ধুদের মাঝে নিজের অবস্থান দেখো লিডারবোর্ডে',

        },
        {
            id: 6,
            icons: <RiQuestionFill />,
            color: { color: '#27895D' },
            backColor: { backgroundColor: '#EAF4EF' },
            title: 'প্রশ্ন করো মন খুলে',
            des: 'তোমার যেকোনো জিজ্ঞাসায় পাচ্ছো এক্সপার্ট গাইডলাইন এক প্ল্যাটফর্মেই',
        }
    ]


    return (
        <div style={{  color: 'black', textAlign: 'center', paddingTop: '100px' }}>
            <h1 className='headingTitle'>নিজের শেখা নিজেই গুছিয়ে <br /> নেয়ার যাত্রা শুরু হোক</h1>
            <p className='headingSubTitle'>যেকোনো বিষয়ের যেকোনো টপিকে পড়ালেখা করতে চলে যাও তোমার পছন্দের সেকশনে</p>


            <Container>
                <Row className='box-19 m-auto w-100'>
                    {
                        dataBox1.map(data => <HeadingTopicBox data={data} key={data.id} />)
                    }
                </Row>
                <Row className='box-20 '>
                    {
                        dataBox.map(data => <HeadingSubBox data={data} key={data.id}></HeadingSubBox>)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default HeadingBox;