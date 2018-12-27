import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import Discord from "../Discord";
import RouterKills from "./RouterKills";
import TotalKills from "../KillComponents/TotalKills";


const RouterMain = () => {


    return (
        <Router>
            <div className="routes">
                <div className="routesContainer">
                    <Link className="boards" to="/kills">Kill Section</Link>
                    <Link className="boards" to="/">Builds Section</Link>
                </div>
                <Route exact path='/weekly' render={(props) =>
                    (<RouterKills/>
                    )}/>


                <Route exact path='/top' render={(props) =>
                    (<TotalKills {...props} totalData={this.props.totalData}/>
                    )}/>

                <Route exact path='/' component={Discord}/>
            </div>
        </Router>
    )
}


export default RouterMain;