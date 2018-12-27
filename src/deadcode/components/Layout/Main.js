import React, {Component} from 'react'
import services from '../services/services'
import Header from './Header'
import RouterMain from '../components/Router/RouterMain'
import Builds from '../Layout/Builds'


class Main extends Component {
    constructor() {
        super()
        this.state = {
            totalData: [],
            data: {
                id: '',
                account_id: '',
                account: '',
                wvwkills: ''
            },
            weekly: [],
            weeklyData: {
                account_id: '',
                api_key: '',
                current_count: '',
                id: '',
                on_yaks: '',
                prev_count: '',
                rank: '',
                user_id: '',
                weekly_kill_total: '',
                wvwkills: ''
            }

        }
        this.loadData = this.loadData.bind(this);
        this.loadWeeklyData = this.loadWeeklyData.bind(this);
    }


    async loadData() {
        let response = await services.loadData()
        // const json = await response.json();

        this.setState({totalData: response});

    }

    async loadWeeklyData() {
        let response = await services.loadWeeklyData()

        this.setState({
            weekly: response
        });

    }


    render() {
        return (
            <div>


                <header className="App-header">
                    <h1 className="App-title">Yaks Bend</h1>
                    <Header/>

                    <RouterMain/>
                </header>

                <Builds/>

            </div>
        )
    }

}


export default Main;