import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className='footer' id='footer'>
            {/* Scroll to top button - Arrow directly in div */}
            <div className="footer-scroll-top" onClick={scrollToTop} title="Back to top">
                ↑
            </div>

            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Foodie Logo" />
                    <p>
                        Delivering happiness to your doorstep. Fresh, delicious, 
                        and fast - that's our promise to you. Order now and 
                        experience the best food delivery service in town!
                    </p>
                    <div className="footer-social-icons">
                        <img 
                            src={assets.facebook_icon} 
                            alt="Facebook" 
                            title="Follow us on Facebook"
                        />
                        <img 
                            src={assets.twitter_icon} 
                            alt="Twitter" 
                            title="Follow us on Twitter"
                        />
                        <img 
                            src={assets.linkedin_icon} 
                            alt="LinkedIn" 
                            title="Connect on LinkedIn"
                        />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Home
                        </li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>
                            <a href="tel:+918299363396" style={{ color: 'inherit', textDecoration: 'none' }}>
                                📞 +91 8299363396
                            </a>
                        </li>
                        <li>
                            <a href="mailto:contact@shsi.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                                ✉️ contact@shsi.com
                            </a>
                        </li>
                        <li>📍 Delhi, India</li>
                    </ul>
                </div>
            </div>

            <hr />

            <p className="footer-copyright">
                Copyright 2025 ShSi.com - All Rights Reserved. Made with ❤️ by Shubhangam
            </p>
        </div>
    )
}

export default Footer
