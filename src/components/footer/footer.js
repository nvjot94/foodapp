import React from 'react';
import './footer.css';
const Footer = () => {
    return <section className="section-footer">
        <div className="row">
            <div className="col span-1-of-2">
                <ul className="footer-nav">
                    <li><a href="/#">About us</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Press</a></li>
                    <li><a href="/#">iOS App</a></li>
                    <li><a href="/#">Android App</a></li>
                </ul>
            </div>
            <div className="col span-1-of-2">
                <ul className="social-links">
                    <li><a href="/#"><i className="ion-social-facebook"></i></a></li>
                    <li><a href="/#"><i className="ion-social-twitter"></i></a></li>
                    <li><a href="/#"><i className="ion-social-googleplus"></i></a></li>
                    <li><a href="/#"><i className="ion-social-instagram"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="row last-div">
            <p>
                This webpage was created for the course
                "Design and Develop a Killer Website Using HTML5 and CSS3" by Navjot.
                No copyrights here.<br></br>
                This webpage is for you! So go and do whatever you want with it and have fun.
                </p>
            <p>
                Build with <i className="ion-ios-heart" ></i> in the beautiful city of Toronto, Canada, February 2020.
                </p>
        </div>
    </section>
}

export default Footer;


