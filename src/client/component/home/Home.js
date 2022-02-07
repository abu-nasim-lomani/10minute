import React from 'react';
import Addtest from './Addtest/Addtest';
import HeaderThum from './HeaderThum/HeaderThum';
import HeadingBox from './HeadingBox/HeadingBox';
import Jobtest from './Jobtest/Jobtest';
import NavbarTop from './navbar/NavbarTop';
import Topicpart from './Topicpart/Topicpart';

function Home() {
    return (
        <div>
            <NavbarTop />
            <HeaderThum />
            <HeadingBox />
            <Topicpart />
            <Addtest />
            <Jobtest />
            
        </div>
    );
}

export default Home;