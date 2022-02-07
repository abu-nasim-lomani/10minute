import React from 'react';
import { Button, Container, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import { FaSignInAlt, FaSearch } from 'react-icons/fa';
import './HeaderThum.css'

function HeaderThum() {
    return (

        <div className='hdthum' style={{ backgroundColor: '#060927', position: '', width: '100%', paddingTop: '130px', color: 'red' }}>
            <Container>
                <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: '' }}>
                    <div className='col-md-6 leftBox col-sm-12' >
                        <h1 className='thumTitle'>ঘরে বসে পড়াশোনার সহজ সমাধান</h1>
                        <p className='thumSubTitle'>ক্লাস ১-১২, ভর্তি পরীক্ষা, বিশ্ববিদ্যালয় ও চাকরি পরীক্ষা প্রস্তুতির জন্য পাবে স্পেশাল কোর্স, মডেল টেস্টসহ সার্বক্ষণিক দিকনির্দেশনা</p>
                        <div className='inputBox d-flex'>
                            {/* <InputGroup className="mb-3 inputsubImput" style={{ width: '100%' }}>
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="ক্লাস ১-১২"
                                    id="input-group-dropdown-a"
                                >
                                    <Dropdown.Item href="#">বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি</Dropdown.Item>
                                    <Dropdown.Item href="#">চাকরিতে নিয়োগ পরীক্ষা প্রস্তুতি</Dropdown.Item>
                                    <Dropdown.Item href="#">চাকরিতে নিয়োগ পরীক্ষা প্রস্তুতি</Dropdown.Item>
                                    <Dropdown.Item href="#">স্কিল ডেভেলপমেন্ট কোর্স সমূহ</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup> */}
                            <div className='p-2' >
                                <input className='inputcontrol   h-100  form-control' style={{borderRadius:'20px', width:'100%'}} placeholder=' পিডিএফ, নোট, সাজেশন  '/>
                            </div>
                            <p className='loginbtn1'><FaSearch/> </p>
                        </div>
                    </div>
                    <div className='col-md-6 rightBox col-sm-12'>
                        <div className='inputBoxRight'>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default HeaderThum;