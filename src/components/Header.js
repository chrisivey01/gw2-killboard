import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {


    const style = {
        display: 'flex',
        justifyContent: 'space-around'
    }
    const center = {
        textAlign: 'center'
    }
    return (
        <div>
            <div className="title">
                <div>
                    <label>Yaks Bend</label>
                </div>
                <div className="killLeader">
                    <label>
                        Top Weekly Killer: {props.weeklyTopKiller !== '' ? props.weeklyTopKiller : null}
                    </label>
                </div>
            </div>
            <nav style={style}>
                <div style={center}>
                    <Link id='home' className={props.selected === 'home' ? 'active' : ''}
                          onClick={(e) => props.selectTab(e)} to="/">
                        Home
                    </Link>
                </div>

                <div style={center}>
                    <Link id='kills' className={props.selected === 'kills' ? 'active' : ''}
                          onClick={(e) => props.selectTab(e)} to="/kills">
                        Kills
                    </Link>
                </div>
                <div style={center}>
                    <Link id='builds' className={props.selected === 'builds' ? 'active' : ''}
                          onClick={(e) =>{ props.selectTab(e); props.getGears();}} to="/builds">
                        Builds
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;
