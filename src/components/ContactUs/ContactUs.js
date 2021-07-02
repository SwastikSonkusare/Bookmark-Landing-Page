import React from 'react'

import "./ContactUs.scss";
const ContactUs = () => {
    return (
        <div className="contact-us">
            <h5 className="contact-us__joined">35,000+ already joined</h5>
            <h2 className="contact-us__header">Stay up-to-date with what we're doing</h2>

            <form className="contact-us__form">
                <input type="email" className="contact-us__input" placeholder="Enter your email address"></input>
                <button className="btn btn--1 contact-us__button">Contact Us</button>
            </form> 
        </div>
    )
}

export default ContactUs
