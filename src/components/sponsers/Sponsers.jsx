import React from 'react';
import './Sponsers.css'
import title from './siddarthaLogo.jpeg'
import actionSports from './actionSports.png'
import nepalPay from './nepalPay.jpg'
import ncellLogo from './ncellLogo.svg'
function Sponsers(props) {
    return (
        <>
            <div className="new-sponsor-panel">
                <div className="mobile-main-div">

                    <div className="new-sponsor-panel__ncell">
                        <span className="new-sponsor-panel__font title-text-height">title sponsor</span>
                        <a href="https://www.siddharthabank.com/" className="new-sponsor-panel__logo--wrap--1" target="_blank">
                            <img className="new-sponsor-panel__logo"
                                 src={title}
                                 alt="Siddartha Bank"  width="130" height="115"/>
                        </a>
                    </div>
                </div>
                <div className="new-sponsor-panel__notKnown">
                    <span className="new-sponsor-panel__font">associate partner</span>
                    <div className="new-sponsor-panel__logo--wrap">
                        <a href="https://www.ncell.com.np/en" target="_blank">
                            <img className="new-sponsor-panel__logo"
                                 src={ncellLogo}
                                 alt="Ncell"  width="185" height="120"/>
                        </a>
                        <a href="" target="_blank">
                            <img className="new-sponsor-panel__logo"
                                 src=" "
                                 alt="Not known Till now"  width="196" height="120"/>
                        </a>
                        <a href="" target="_blank">
                            <img className="new-sponsor-panel__logo"
                                 src="  "
                                 alt="Not known Till now" width="148" height="120"/>
                        </a>
                    </div>
                </div>
                <div className="new-sponsor-panel__">
                    <span className="new-sponsor-panel__font">official <br/>umpire partner</span>
                    <a href="https://business.nepalpay.com.np/" className="new-sponsor-panel__logo--wrap--1"
                       target="_blank">
                        <img className="new-sponsor-panel__logo"
                             src={nepalPay}
                             alt="Nepal Pay"  width="130" height="120"/>
                    </a>
                </div>

                <div className="new-sponsor-panel__start disply-none">
                    <span className="new-sponsor-panel__font">official <br/>broadcaster</span>
                    <a href="" className="new-sponsor-panel__logo--wrap--1" target="_blank">
                        <img className="new-sponsor-panel__logo"
                             src=" https://documents.iplt20.com//ipl/assets/images/new-sponsor-start-sports-logo.webp "
                             alt="star sports"  width="219" height="176"/>
                    </a>
                </div>
                <div className="new-sponsor-panel__ disply-none border-0">
                    <span className="new-sponsor-panel__font">official digital<br/>streaming partner</span>
                    <a href="https://www.youtube.com/@ActionSportsNepal" className="new-sponsor-panel__logo--wrap--1" target="_blank">
                        <img className="new-sponsor-panel__logo"
                             src={actionSports} alt="Action Sports"
                              width="180" height="164"/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Sponsers;