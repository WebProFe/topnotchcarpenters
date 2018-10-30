import React from 'react';
import { Link } from 'react-router-dom';

class PrimaryFourCol extends React.Component {

    render() {
        return (
            <div className="full-width-row home-primary-bg">
                <div className="row-container">
                    <h1 className="h1-header text-center lrg-btm-sp">WHY CHOOSE TOP NOTCH?</h1>
                    <div className="four-col-primary__container">
                        <div className="four-col-primary__container__item">
                            <i className="fas fa-leaf four-col-primary__container__item__icon"></i>
                            <h3 className="four-col-primary__container__item__header">WE DELIVER QUALITY</h3>
                            <p className="four-col-primary__container__item__para">Top quality work</p>
                        </div>
                        
                        <div className="four-col-primary__container__item">
                            <i className="far fa-calendar-check four-col-primary__container__item__icon" ></i>
                            <h3 className="four-col-primary__container__item__header">ALWAYS ON TIME</h3>
                            <p className="four-col-primary__container__item__para">On time, every time</p>
                        </div>

                        <div className="four-col-primary__container__item">
                            <i className="fas fa-users four-col-primary__container__item__icon"></i>
                            <h3 className="four-col-primary__container__item__header">WE ARE PASSIONATE</h3>
                            <p className="four-col-primary__container__item__para">We work hard to deliver</p>
                        </div>

                        <div className="four-col-primary__container__item">
                            <i className="fas fa-cog four-col-primary__container__item__icon"></i>
                            <h3 className="four-col-primary__container__item__header">PROFFESIONAL NOTCH WORK</h3>
                            <p className="four-col-primary__container__item__para">Top Notch work. Satisfaction Guaranteed!!</p>
                        </div>
                        
                    </div>
                    <div className="text-center">
                        <Link to="/skills" className="btn btn--blue">Our Services</Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PrimaryFourCol;