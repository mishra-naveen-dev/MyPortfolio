import React from 'react'
import './Contact.css';
import img1 from '../../images/contactme.jpg'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs';

const Contact = () => {
    return (
        <>

            <div id="contact" className="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">

                                <div className="row border-line">
                                    <img src={img1} alt="contact" className="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="card2 d-flex card border-0 px-4 py-5">
                                <div className="row">
                                    <div className="row"> <h5>Contact With  <FaLinkedin color="blue" size={33} className="ms-2" />
                                        <FaGithub color="black" size={33} className="ms-2" />
                                        <BsInstagram color="red" size={33} className="ms-2" /></h5>
                                    </div>
                                    <div className="row px-3 mb-4">
                                        <div className="line" />
                                        <small className="or text-center ">OR</small>
                                        <div className="line" />
                                    </div>
                                    <div className="row px-3">
                                        <input type="text" name="name" placeholder="Enter your Name" className="mb-3" />
                                        <input type="email" name="email" placeholder="Enter your Email" className="mb-3" />
                                        <input type="moblie" name="moblie" placeholder="Enter your Contact no." className="mb-3" />
                                        <textarea type="text" name="msg" placeholder="Enter your Message" className="mb-3" />
                                    </div>
                                    <div className="row px-3">
                                        <button action="/" className="button" type="submit">SEND MESSAGE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact