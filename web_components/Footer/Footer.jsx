import React from 'react';

import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import './Footer.css'
import Iframe from 'react-iframe';

function Footer() {
    return (
        <div className='footer_bg  pb-5'>
            <div className='container text-center pt-5'>
                <div className='row'>
                    <div className='col contact_us  fs-5 fw-bold '>
                        Contact Us
                    </div>
                    <div className='row'>
                        <div className='col text-center contact_logo pt-2 pb-4 fs-5 fw-bold '>
                            Stay With Us Connect With Future
                        </div>
                    </div>
                </div>
            </div>


            <div className='container d-flex justify-content-center'>
                <div className='row'>

                    <div className='col'>
                        <a href=""> < TfiTwitter size={25} color='rgb(78, 120, 247)' /> </a>
                    </div>
                    <div className='col'>
                        <a href=""> <FiFacebook size={25} color='rgb(78, 120, 247)' /> </a>
                    </div>
                    <div className='col'>
                        <a href=""> <AiOutlineInstagram size={25} color='rgb(78, 120, 247)' /> </a>
                    </div>
                    <div className='col'>
                        <a href=""> <CiLinkedin size={25} color='rgb(78, 120, 247)' /> </a>
                    </div>

                </div>

            </div>

            <   div className='container pt-5 text-center'>
                <div className='row'>
                    <div className='col-12 col-lg-4 fw-bold  '>
                        <div className='py-2 fs-6 fw-bold  contact_us'>
                            About Us
                        </div>
                        <div className='py-2 fs-6 fw-bold  contact_us'>
                            Contact us
                        </div>
                        <div className='py-2 fs-6 fw-bold  contact_us'>
                            Our Story
                        </div>
                        <div className='py-2 fs-6 fw-bold  contact_us'>
                            Carrers
                        </div>
                        <div className='py-2 fs-6 fw-bold  contact_us'>
                            For Future
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 fw-bold  foot_add'>
 
                        <div className='text-center fs-5 fw-bold pb-2 contact_us'>


                            Address
                        </div>
                        <div className='text-center  fs-6 fw-bold contact_us '>
                            SSS TOWERS, <br />
                            1st FLOOR, <br />
                            NEAR TO GOVERNMENT RATIO SHOP SIVANANDHAPURAM, <br />
                            SARAVANAMPATTI, <br />
                            COIMBATORE
                            Tamil Nadu - 641 035
                        </div>

                    </div>
                    <div className='col-12 col-lg-4  fw-bold foot_map'>

                        <div className='text-center'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6500405732077!2d76.99568787590059!3d11.064842853805866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f71ab0a8d55b%3A0xa3ec0acd4840793!2sZeekers%20Technology%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1689770233935!5m2!1sen!2sin"
                             width="300" height="200"
                              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>





                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;