import React from 'react';
import './meals.css';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img8 from '../../assets/images/8.jpg';

const MealsSection = () => {
    return <section className="section-meals clearfix">
        <ul className="meals-showcase" >
            <li>
                <figure>
                    <img src={img1} alt="Korean bibimbap with egg and vegetables"></img>
                </figure>
            </li>
            <li>
                <figure>
                    <img src={img2} alt="Simple italian pizza with cherry tomatoes "></img>
                </figure>
            </li>
            <li>
                <figure>
                    <img src={img3} alt="Chicken breast steak with vegetables  "></img>
                </figure>
            </li>
            <li>
                <figure>
                    <img src={img4} alt="Autumn pumpkin soup"></img>
                </figure>
            </li>
        </ul>
        
        <ul className="meals-showcase">
            <li>
                <figure>
                    <img src={img5} alt="Paleo beef steak with vegetables"></img>
                </figure>
            </li>
            <li>
                <figure>
                    <img src={img6} alt="Healthy baguette with egg and vegetables"></img>
                </figure>
            </li>
            <li>
                <figure>
                    <img src={img7} alt="Burger with cheddar and bacon "></img>
                </figure>
            </li>
            <li>
                <figure>
                    <img src={img8} alt="Granola with cherries and strawberries"></img>
                </figure>
            </li>
        </ul>
    </section>
}

export default MealsSection;