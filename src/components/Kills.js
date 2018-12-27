import React from 'react'
import {Link, Route} from 'react-router-dom'
import services from '../services/Services'
import TopKillTable from './TopKillTable'
import WeeklyKillTable from './WeeklyKillTable'

class Kills extends React.Component {

    state = {
        weeklyKills: [],
        topKills: [],
    }


    loadWeekly = () => {
        services.loadWeekly()
            .then(json => {
                if (json.length > 1) {
                    json.sort((a, b) => b.weekly_kill_total - a.weekly_kill_total)
                }
                json.map((item, i) => {
                    item['rank'] = i + 1
                })
                return json
            })
            .then(json => {
                this.setState({weeklyKills: json});
            })
    }

    loadTop = () => {
        services.loadTop()
            .then(json => {
                if (json.length > 1) {
                    json.sort((a, b) => b.wvwkills - a.wvwkills)
                }
                json.map((item, i) => {
                    item['rank'] = i + 1
                })
                return json
            })
            .then(json => {
                this.setState({topKills: json});

            })
        // const json = await response.json();
    }


    render() {
        return (
            <div>
                <div className="killNavBar">
                    <div>
                        <Link onClick={this.loadWeekly} to='/kills/weeklyKill'>
                            Weekly
                        </Link>
                    </div>
                    <div>
                        <Link onClick={this.loadTop} to='/kills/topKill'>
                            Top
                        </Link>
                    </div>

                </div>
                <div>
                    <Route exact path="/kills/weeklyKill"
                           component={() => <WeeklyKillTable weeklyKills={this.state.weeklyKills}/>}/>
                    <Route exact path="/kills/topKill"
                           component={() => <TopKillTable topKills={this.state.topKills}/>}/>
                </div>
            </div>
        )
    }
}

export default Kills;
