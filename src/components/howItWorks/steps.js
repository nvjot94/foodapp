import React from 'react';
import './steps.css';
import phoneImg from '../../assets/images/app-iPhone.png';
import appStore from '../../assets/images/download-app.svg';
import playStore from '../../assets/images/download-app-android.png';
const Steps = () => {
    return <section className="section-steps">
        <div className='row'>
            <h2 className="sec-heading">HOW IT WORKS &mdash; SIMPLE AS 1, 2, 3</h2>
        </div>
        <div className='row'>
            <div className='col span-1-of-2 step-box'>
                <img src={phoneImg} alt="app on Iphone" className="app-screen"></img>
            </div>
            <div className='col span-1-of-2 step-box'>
                <div className="work-step">
                    <div>1</div>
                    <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                </div>
                <div className="work-step">
                    <div>2</div>
                    <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                </div>
                <div className="work-step">
                    <div>3</div>
                    <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                </div>
                <a href="/#"><img src={appStore} alt="app store button"></img></a>
                <a href="/#"><img src={playStore} alt="play store button"></img></a>
            </div>
        </div>

    </section>
}

export default Steps;