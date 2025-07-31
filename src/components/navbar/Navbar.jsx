import React, {Component} from 'react';
import CANLogo from './CANLogo.png';
import xLogo from './xLogo.png';
import fbLogo from './fbLogo.png';
import instaLogo from './images.jpeg';
import nplLogo from './nplLogo.png';
class Navbar extends Component {
    render() {
        return (
            <>
                <div className="navbarUp">
                    <div className="navbarUpLeft">
                        <img src={CANLogo} alt="CAN Logo" id="logoCan" />
                        <h3>CAN</h3>
                    </div>

                    <div className="navbarUpRight">
                        <p>Follow Us</p>
                        <a className="socialHandles" href="https://x.com/CricketNep"><img src={xLogo} alt="twitter" /></a>
                        <a className="socialHandles" href="https://www.facebook.com/CricketAssociationOfNepalOfficial.CAN"><img src={fbLogo} alt="facebook" /></a>
                        <a className="socialHandles" href="https://www.instagram.com/cricketassociationofnepal/"><img src={instaLogo} alt="instagram" /></a>
                    </div>
                </div>
                <div className="navbarDown">
                    <div className="navbarDownLeft">
                        <img src={nplLogo} alt="NPL Logo" id="logonpl"/>
                    </div>
                    <div className="navbarDownRight">
                        <a href="#">Matches</a>
                        <a href="#">Points Table </a>
                        <a href="#">Teams</a>


                    </div>

                </div>


            </>
        );
    }
}

export default Navbar;
