import React, {Component} from 'react'

import Header from './Header'

import services from '../services/Services'
import {Route} from "react-router-dom";
import Kills from "./Kills";
import Builds from "./Builds";


class Main extends Component {

    state = {
        weeklyTopKiller: '',
        selected: 'home',
        gears:{}

    }


    componentWillMount() {
        this.topWeeklyKiller()
    }

    selectTab = (e) => {
        this.setState({
            selected: e.target.id
        })
    }

    getGears = () => {
        services.getGears()
            .then(results => {
                console.log(results)
            })
    }


    topWeeklyKiller() {
        services.loadWeeklyTopKiller()
            .then(results => {
                console.log(results)
                this.setState({
                    weeklyTopKiller: results[0].account_id
                })
            })
    }

    render() {
        const hide ={
            display:'none'
        }
        const{selected} = this.state
        return (
            <div>
                <div className="header ">
                    <Header
                        selectTab={(e)=>this.selectTab(e)}
                        weeklyTopKiller={this.state.weeklyTopKiller}
                        selected={this.state.selected}
                        getGears={()=>this.getGears()}
                    />
                </div>


                <Route path="/builds" component={()=> <Builds/>}/>
                <Route path="/kills" component={Kills}/>
                <div style={selected !== 'home' ? hide : null} className="flexContainer">
                    <div>
                        <iframe src="https://discordapp.com/widget?id=476902310581239810&theme=dark" width="350" height="500"
                                allowtransparency="true" frameBorder="0"></iframe>
                    </div>
                    <div className="textAdjuster" >
                        <label> Join the YB discord! </label>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main;