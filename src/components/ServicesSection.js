import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="home2"/>
            </div>

        </div>
    )
}

export default ServicesSection;