import React from 'react';
import './testi.css';
import cos1 from '../../assets/images/customer-1.jpg';
import cos2 from '../../assets/images/customer-2.jpg';
import cos3 from '../../assets/images/customer-3.jpg';

const Testi = () => {
    return <section className="section-testimonials">
        <div className="row">
            <h2>OUR CUSTOMERS CAN'T LIVE WITHOUT US </h2>
        </div>
        <div className="row">
            <div class="col span-1-of-3">
                <blockquote>
                    Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                        <cite><img src={cos1} alt="img" />Alberto Duncan></cite>
                </blockquote>
            </div>
            <div class="col span-1-of-3">
                <blockquote>
                    Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
                        <cite><img src={cos2} alt="img" />Joana Silva</cite>
                </blockquote>
            </div>
            <div class="col span-1-of-3">
                <blockquote>
                    I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
                    <cite><img src={cos3} alt="img" />Milton Chapman</cite>
                </blockquote>
            </div>
        </div>
    </section>
}

export default Testi;