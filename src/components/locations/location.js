import React from 'react';
import './location.css';
import img1 from '../../assets/images/lisbon-3.jpg';
import img2 from '../../assets/images/london.jpg';
import img3 from '../../assets/images/san-francisco.jpg';
import img4 from '../../assets/images/berlin.jpg';
const Location = () => {
    return <section className="location">
        <div className="row">
            <h2>WE'RE CURRENTLY IN THESE CITIES</h2>
        </div>
        <div className="row">
            <div className="col span-1-of-4 box1" >
                <img className="location-img" src={img1} alt="Lisbon location"></img>

                <h3>LISBON</h3>
                <div className="city-feature">
                    <i class="ion-ios-person icon-small"></i>
                    1600+ happy eaters
                </div>
                <div className="city-feature">
                    <i class="ion-ios-star icon-small"></i>
                    60+ chefs
                </div>
                <div className="city-feature">
                    <i class="ion-social-twitter icon-small"></i>
                    <a href="/#">@omnifood_lx</a>
                </div>

            </div>
            <div className="col span-1-of-4 box1" >
                <img className="location-img" src={img3} alt="Lisbon location"></img>
                <h3>SAN FRANCISCO</h3>
                <div className="city-feature">
                    <i class="ion-ios-person icon-small"></i>
                    1600+ happy eaters
                </div>
                <div className="city-feature">
                    <i class="ion-ios-star icon-small"></i>
                    60+ chefs
                </div>
                <div className="city-feature">
                    <i class="ion-social-twitter icon-small"></i>
                    <a href="/#">@omnifood_lx</a>
                </div>
            </div>
            <div className="col span-1-of-4 box1" >
                <img className="location-img" src={img4} alt="Lisbon location"></img>
                <h3>BERLIN</h3>
                <div className="city-feature">
                    <i class="ion-ios-person icon-small"></i>
                    1600+ happy eaters
                </div>
                <div className="city-feature">
                    <i class="ion-ios-star icon-small"></i>
                    60+ chefs
                </div>
                <div className="city-feature">
                    <i class="ion-social-twitter icon-small"></i>
                    <a href="/#">@omnifood_lx</a>
                </div>
            </div>
            <div className="col span-1-of-4 box1" >
                <img className="location-img" src={img2} alt="Lisbon location"></img>
                <h3>LONDON</h3>
                <div className="city-feature">
                    <i class="ion-ios-person icon-small"></i>
                    1600+ happy eaters
                </div>
                <div className="city-feature">
                    <i class="ion-ios-star icon-small"></i>
                    60+ chefs
                </div>
                <div className="city-feature">
                    <i class="ion-social-twitter icon-small"></i>
                    <a href="/#">@omnifood_lx</a>
                </div>
            </div>

        </div>
    </section>
}

export default Location;


