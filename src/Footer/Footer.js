import React from 'react';
import { Component } from 'react';
import './Footer.scss';

function Footer() {
    return(
            <footer className='footer-nav'>
                <section className='contact-info-2'>
                    <h1>Contact</h1>
                    <a>Github Link Here</a>
                    <a>LinkedIn Link Here</a>
                    <a>Email Link Here</a>
                </section>
                <section className='contact-info-1'>
                    <a>Kathryn Jackson</a>
                    <a>Washington, DC</a>
                </section>
            </footer>
    )
}


export default Footer;