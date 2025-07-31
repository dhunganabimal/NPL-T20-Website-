import React, {Component} from 'react';
import './SectionPart.css';
import calenderIcon from './calendar-symbol.svg'
import barIcon from './pointsTable.png'
import stats from './stats.png'
import teams from './allTeams.png'
class SectionPart extends Component {
    render() {
        return (
            <>
                <section className="looking-for-section">
                    <div className="container">
                        <h1 className="heading">What Are You Looking For?</h1>
                        <div className="options">
                            <a className="option-card" href="#">
                                <img src={calenderIcon} alt="Fixtures Icon"/>
                                <span>Fixtures &amp; Results</span>
                            </a>
                            <a className="option-card" href="#">
                                <img src={barIcon} alt="Points Table Icon"/>
                                <span>Points Table</span>
                            </a>
                            <a className="option-card" href="#">
                                <img src={stats} alt="Stats Icon"/>
                                <span>Overall Stats</span>
                            </a>
                            <a className="option-card" href="#">
                                <img src={teams} alt="Teams Icon"/>
                                <span>All Teams</span>
                            </a>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}

export default SectionPart;