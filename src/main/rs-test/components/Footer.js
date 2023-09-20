import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import Head from "next/head"

import styles from '../src/css/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.myFooter}>
            <div className="footer-inner">
                <div className="footer-logo">
                    <img src="../public/images/Footerlogo.png" alt="#none" />
                </div>
                <div className="copyright">
                    <div className="service">
                        <p>
                            Service center: 111 - 1111
                            <span>
                Weekdays: 09:00 am to 6:00 pm<br />
                Lunch time: 12:00 am to 1:00 pm Closed<br />
                on Sat/Sun/Holidays
              </span>
                        </p>
                    </div>
                    <div className="service-text">
                        <div>
                            <span>About Us</span>
                            <span>Terms of service</span>
                            <span>Privacy Statement</span>
                            <span>Information Use</span>
                        </div>
                        <div className="sns">
                            <a href="#none"><i className="bi-facebook"></i></a>
                            <a href="#none"><i className="bi-instagram"></i></a>
                            <a href="#none"><i className="bi-twitter"></i></a>
                            <a href="#none"><i className="bi-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="sub-text">
                    <p>
                        Copyright © Music Streaming. All rights reserved.<br />
                        We provide services by subscribing to payment purchase safety (escrow) for safe transactions.
                    </p>
                </div>
            </div>


                <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
                <Head>
                    {/* Add the Bootstrap Icons CSS */}
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
                    />
                </Head>

        </footer>
    );
};

export default Footer;