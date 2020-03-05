import React from 'react';
import './options.css';


const Options = () => {
    return <section className="section-options">
        <div className="row">
            <h2>START EATING HEALTHY TODAY </h2>
        </div>
        <div className="row ">
            <div className="col span-1-of-3 ">
                <div className="plan-box">
                    <h3>PREMIUM</h3>
                    <div >
                        <p className="plan-price">$399 <span >/ month</span></p>
                        <p className="plan-price-per-meal">That's only 13.30$ per meal</p>
                    </div>


                    <div>
                        <ul>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>1 meal every day</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Order 24/7</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Access to newest creations</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Free delivery</li>
                        </ul>
                    </div>
                    <div><a className="btn btn-full" href="/#">Sign up now</a></div>

                </div>

            </div>

            <div className="col span-1-of-3 ">
                <div className="plan-box">
                    <h3>PRO</h3>
                    <div ><p className="plan-price">$149 <span >/ month</span></p>
                        <p className="plan-price-per-meal">That's only 14.90$ per meal</p></div>


                    <div>
                        <ul>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>1 meal 10 days/month</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Order 24/7</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Access to newest creations</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Free delivery</li>
                        </ul>
                    </div>

                    <div><a className="btn btn-ghost" href="/#">Sign up now</a></div>
                </div>
            </div>

            <div className="col span-1-of-3 ">
                <div className="plan-box">
                    <h3>STARTER</h3>
                    <div className="plan-price">19$ <span >/ meal</span>
                        <p className="plan-price-per-meal-last">&nbsp;</p>
                    </div>


                    <div>
                        <ul>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>1 meal</li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Order from 8 am to 12 pm</li>
                            <li><i class="ion-ios-close-empty icon-small"></i></li>
                            <li><i class="ion-ios-checkmark-empty icon-small"></i>Free delivery</li>
                        </ul>
                    </div>
                    <div><a className="btn btn-ghost" href="/#">Sign up now</a></div>
                </div>
            </div>
        </div>
    </section>
}

export default Options;