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
        gears: [],
        character_name: '',
        character_gear: {}

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


    loadGearsForCharacter = (name) => {

        let grabGears;
        services.playersGear(name)
            .then(results => {



                this.setState({
                    character_gear: results[0],
                    character_name: name,
                }, () => {
                    console.log(this.state.character_name)
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
        const hide = {
            display: 'none'
        }
        const {selected} = this.state
        return (
            <div>
                <div className="header ">
                    <Header
                        selectTab={(e) => this.selectTab(e)}
                        weeklyTopKiller={this.state.weeklyTopKiller}
                        selected={this.state.selected}
                        getGears={() => this.getGears()}
                    />
                </div>
                <Route path="/" exact component={() => <Discord/>}/>
                <Route path="/builds" component={() => <Builds loadGearsForCharacter={this.loadGearsForCharacter}
                                                               character_gear={this.state.character_gear}
                                                               character_name={this.state.character_name}
                                                               gears={this.state.gears}/>}/>
                <Route path="/kills" component={Kills}/>
            </div>
        )
    }
}


export default Main;