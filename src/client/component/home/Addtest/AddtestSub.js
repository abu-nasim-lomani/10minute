import React from 'react';
import { Col } from 'react-bootstrap';
import { FiUsers } from 'react-icons/fi';
import image from '../../../../images/images/Admission/A unit.jpg'

function AddtestSub(props) {
    return (
        <Col className='addtest-121'>
            <div className="d-flex align-items-center" style={{ transition: '.3s' , backgroundColor:'#F7F8FA'}} tabindex="0">
                <img alt="image" class="tt-aspect-video image-loaded" style={{ borderBottomLeftRadius: ' 4px', borderTopLeftRadius: '4px' }} src={image} />
                <div className='tt-pl-3' >
                    <div class="tt-title tt-font-semibold tt-text-sm md:tt-text-xl tt-py-1">
                        <h3 style={{fontSize:'20px', fontWeight:'600'}}>বিশ্ববিদ্যালয় বিজ্ঞান</h3>
                    </div>
                    <div className="users d-flex align-items-center">
                        <span style={{fontSize:'20px'}}>
                            <FiUsers/>
                        </span>
                        <span style={{fontSize:'14px', color:'#525252', paddingTop:'7px', paddingLeft:'10px'}}>ইতিমধ্যে ভর্তি হয়েছে 2,222 জন</span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default AddtestSub;