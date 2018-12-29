import React, {Component} from 'react'

import Header from './Header'

import services from '../services/Services'
import {Route} from "react-router-dom";
import Discord from "./Discord";
import Kills from "./Kills";
import Builds from "./Builds";


class Main extends Component {

    state = {
        weeklyTopKiller: '',
        selected: 'home',
        gears:[]

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
                this.setState({
                    gears: results
                })
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
                <Route path="/" exact component={()=> <Discord/>}/>
                <Route path="/builds" component={()=> <Builds gears={this.state.gears}/>}/>
                <Route path="/kills" component={Kills}/>
            </div>
        )
    }
}


export default Main;